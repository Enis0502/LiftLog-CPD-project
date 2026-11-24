import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Workout } from "@/types";
import formatDuration from "@/utils/formatDuration";
import { workoutVolume } from "@/utils/workoutVolume";
import {
  Image,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from "react-native";

//type Props = { workout: Workout; onPress?: () => void };

type Props = {
  workout: Workout;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  onLongPress: () => void;
};
export default function WorkoutCard({
  workout,
  style,
  onPress,
  onLongPress,
}: Props) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      //used by the screen readers 
      accessibilityRole="button"
      accessibilityLabel={`${workout.name}, ${workout.exercise.length} exercises, ${workoutVolume(workout)} kilograms, ${formatDuration(workout.duration)}`}
      accessibilityHint="Opens the workout. Long press to delete."
      android_ripple={{ color: theme.text.secondary }}
      //
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.6 : 1.0, backgroundColor: theme.cardBackground },
        ,
        style,
      ]}
    >
      <Image style={styles.logo} source={require("@/assets/images/logo.png")} />

      <View
        style={{
          flexDirection: "column",
          marginLeft: 16,
        }}
      >
        <Text style={[styles.t3, { color: theme.text.primary }]}>
          {workout.name}
        </Text>
        <Text style={{ marginTop: 8, color: theme.text.secondary }}>Date</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: 16,
            rowGap: 8,
            marginTop: 16,
          }}
        >
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            Excercises:{" "}
            <Text style={{ color: theme.text.highlight }}>
              {workout.exercise.length}
            </Text>
          </Text>
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            {workoutVolume(workout)} kg
          </Text>
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            Duration:{formatDuration(workout.duration)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
