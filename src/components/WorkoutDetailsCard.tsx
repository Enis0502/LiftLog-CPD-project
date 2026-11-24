import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { StyleProp, Text, View, ViewStyle } from "react-native";

type workoutDetailsCardProp = {
  title: string;
  parameter: any;
  style?: StyleProp<ViewStyle>;
};

export default function WorkoutDetailsCard({
  title,
  parameter,
  style,
}: workoutDetailsCardProp) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.workoutDetailsCard,
        { backgroundColor: theme.cardBackground },
      ]}
    >
      <Text style={{ color: theme.text.secondary }}>{title}:</Text>
      <Text style={{ color: theme.text.highlight }}>{parameter}</Text>
    </View>
  );
}
