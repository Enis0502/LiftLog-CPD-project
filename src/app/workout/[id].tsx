import EmptyState from "@/components/EmptyState";
import ExerciseCard from "@/components/ExerciseCard";
import WorkoutDetailsCard from "@/components/WorkoutDetailsCard";
import { Spacing } from "@/constants/theme";
import { getWorkout } from "@/data/api";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import formatDuration from "@/utils/formatDuration";
import { workoutVolume } from "@/utils/workoutVolume";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function WorkoutDetailsScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);
  const selectedWorkout = getWorkout(id);

  console.log(selectedWorkout);

  return (
    <View style={{ flex: 1 }}>
      {selectedWorkout === undefined ? (
        <EmptyState
          title="Workout not found"
          message="This workout does not exist."
        />
      ) : (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            padding: Spacing.md,
            paddingBottom: Spacing.md + insets.bottom,
            gap: Spacing.sm,
          }}
        >
          <Image
            style={styles.logo}
            source={require("@/assets/images/logo.png")}
          />

          <Text style={[styles.t1, { color: theme.text.primary }]}>
            {selectedWorkout?.name}
          </Text>
          <Text style={{ color: theme.text.secondary }}>
            Completed at: 23.11{" "}
          </Text>
          <View style={{ flexDirection: "row", gap: Spacing.sm }}>
            <WorkoutDetailsCard
              title="Total volume"
              parameter={workoutVolume(selectedWorkout)}
            />

            <WorkoutDetailsCard
              title="Duration"
              parameter={formatDuration(selectedWorkout.duration)}
            />

            <WorkoutDetailsCard
              title="Exercises"
              parameter={selectedWorkout.exercise.length}
            />
          </View>
          <Text
            style={[
              styles.t3,
              { color: theme.text.primary, marginTop: Spacing.md },
            ]}
          >
            Exercise breakdown
          </Text>
          <View style={{ gap: Spacing.sm }}>
            {selectedWorkout.exercise.map((ex) => (
              <ExerciseCard key={ex.id} exercise={ex} onPress={() => {}}></ExerciseCard>
            ))}
          </View>

          {/* <Pressable
            onPress={() => {
              router.push(`/`);
            }}
          >
            <Text style={{color:theme.text.primary}}>Back to the workout list</Text>
          </Pressable> */}
          <Stack.Screen
            options={{ title: selectedWorkout?.name }}
          ></Stack.Screen>
          <Pressable
            onPress={() => {
              router.canGoBack() ? router.back() : router.replace("/");
            }}
            style= {({pressed}) => [styles.button, {
                opacity: pressed ? 0.6 : 1,
                backgroundColor: theme.buttonSecondary,
                marginTop: Spacing.md
            }]}
          >
            <Text style={{color:theme.text.primary}}>Back to the list</Text>
          </Pressable>
        </ScrollView>
      )}
    </View>
  );
}
