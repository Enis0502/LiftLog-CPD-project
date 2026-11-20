import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Pressable, Text } from "react-native";

type workoutProp = {title: string };

export default function FilterCard({ title }: workoutProp) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => {
        console.log("pressed filter");
        // workouts.filter((w) => {
          // w.duration > 1500;
        // });
      }}
      style={[styles.filterButtons, { backgroundColor: theme.text.secondary }]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}
