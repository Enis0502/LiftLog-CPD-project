import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";
import WorkoutCard from "@/components/WorkoutCard";
import { FontSize, Spacing } from "@/constants/theme";
import { fetchWorkouts } from "@/data/api";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Workout } from "@/types";
import confirmDelete from "@/utils/confirmDelete";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (width - 2 * Spacing.md - (columns - 1) * Spacing.md) / columns;

  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  const FILTERS = ["All", "Short", "Medium", "Long"] as const;
  type Filter = (typeof FILTERS)[number];
  const [filter, setFilter] = useState<Filter>("All");
  const [attempt, setAttempt] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();
  async function refresh() {
    setRefreshing(true);
    try {
      setWorkouts(await fetchWorkouts({ fail: attempt < 2 }));
    } catch {
      <Text>refreshingggg...</Text>;
    } finally {
      setRefreshing(false);
    }
  }
  useEffect(() => {
    let ignore = false;

    fetchWorkouts({ fail: attempt < 1 })
      .then((data) => {
        if (!ignore) {
          setWorkouts(data);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!ignore) {
          setStatus("error");
        }
      });

    return () => {
      ignore = true;
    };
  }, [attempt]);

  useEffect(() => {
    fetchWorkouts();
  }, [filter]);

  function retry() {
    setStatus("loading");
    setAttempt((a) => a + 1);
  }

  if (status === "loading")
    return <ActivityIndicator style={{ flex: 1 }}></ActivityIndicator>;

  if (status === "error") return <ErrorState onRetry={retry} />;

  return (
    <FlatList
      data={workouts}
      keyExtractor={(w) => String(w.id)}
      key={columns}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? { gap: Spacing.md } : undefined}
      renderItem={({ item }) => (
        <WorkoutCard
          style={{ width: cardWidth }}
          workout={item}
          onPress={() => router.push(`/workout/${item.id}`)}
          onLongPress={() => confirmDelete({ workout: item, setWorkouts })}
        />
      )}
      ListEmptyComponent={
        <EmptyState
          title="No workouts yet!"
          message="Your workouts will appear here. Motivate yourself!"
        />
      }
      refreshing={refreshing}
      onRefresh={refresh}
      contentContainerStyle={{
        padding: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
        flexGrow: 1,
      }}
      ItemSeparatorComponent={() => (
        <View style={{ height: Spacing.md }}></View>
      )}
      ListHeaderComponent={() => (
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.t1, { color: theme.text.primary }]}>
              Workouts
            </Text>
            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text
                style={{
                  fontSize: FontSize.lg,
                  fontWeight: "bold",
                  color: theme.text.highlight,
                }}
              >
                {workouts.length}
              </Text>
              <Text style={{ color: theme.text.secondary }}>This week</Text>
            </View>
          </View>
          <View
            style={[
              styles.card,
              {
                marginTop: Spacing.xl,
                padding: Spacing.xl,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: theme.cardBackground,
              },
            ]}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: theme.text.secondary }}>Weekly volume</Text>
              <Text
                style={[
                  styles.t2,
                  { marginTop: Spacing.xl, color: theme.text.primary },
                ]}
              >
                13455
                <Text
                  style={{ fontSize: FontSize.sm, color: theme.text.highlight }}
                >
                  {" "}
                  kg
                </Text>
              </Text>
            </View>
            <View>
              <Image
                //image needs to bi fixed for autoscaling
                style={{
                  width: 150,
                  height: 100,
                }}
                source={require("@/assets/images/chart.png")}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginVertical: Spacing.lg,
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.t2, { color: theme.text.primary }]}>
              Recent sessions
            </Text>
            <Text style={{ color: theme.text.secondary }}>June</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: Spacing.md,
              marginBottom: Spacing.lg,
            }}
          >
            {/* {FILTERS.map((f) => (
              <FilterCard key={f} title={f} workouts={}/>
            ))} */}
          </View>
        </View>
      )}
    />
  );
}
