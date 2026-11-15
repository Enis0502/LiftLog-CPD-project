import WorkoutCard from "@/components/WorkoutCard";
import { FontSize, Spacing } from "@/constants/theme";
import { workouts } from "@/data/workouts";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { FlatList, Image, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { width } = useWindowDimensions();
  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;
  const cardWidth =
    (width - 2 * Spacing.md - (columns - 1) * Spacing.md) / columns;

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <FlatList
      data={workouts}
      keyExtractor={(w) => String(w.id)}
      key={columns}
      numColumns={columns}
      columnWrapperStyle={columns > 1 ? { gap: Spacing.md } : undefined}
      renderItem={({ item }) => (
        <WorkoutCard workout={item} style={{ flex: 1 }} />
      )}
      contentContainerStyle={{
        padding: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
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
        </View>
      )}
    />
  );
}
