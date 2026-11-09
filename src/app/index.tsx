import WorkoutCard from "@/components/WorkoutCard";
import { Spacing } from "@/constants/theme";
import { workouts } from "@/data/workouts";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <ScrollView
      style={[styles.background, { backgroundColor: theme.background }]}
      contentContainerStyle={{
        padding: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
      }}
    >
      <Text style={{ marginBottom: 16, color: theme.text.secondary }}>
        Your training
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.t1, { color: theme.text.primary }]}>Workouts</Text>
        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: theme.text.highlight,
            }}
          >
            5
          </Text>
          <Text style={{ color: theme.text.secondary }}>This week</Text>
        </View>
      </View>
      <View
        style={[
          styles.card,
          {
            marginTop: 32,
            padding: 32,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: theme.cardBackground,
          },
        ]}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ color: theme.text.secondary }}>Weekly volume</Text>
          <Text
            style={[styles.t2, { marginTop: 32, color: theme.text.primary }]}
          >
            13455
            <Text style={{ fontSize: 20, color: theme.text.highlight }}>
              {" "}
              kg
            </Text>
          </Text>
        </View>
        <View>
          <Image
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
          marginVertical: 24,
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.t2, { color: theme.text.primary }]}>
          Recent sessions
        </Text>
        <Text style={{ color: theme.text.secondary }}>June</Text>
      </View>

      <View style={{ gap: 16 }}>
        {workouts.map((w) => (
          <WorkoutCard key={w.id} workout={w.name}></WorkoutCard>
        ))}
      </View>
    </ScrollView>
  );
}
