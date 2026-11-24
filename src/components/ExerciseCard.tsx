import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Exercise } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, Text, View } from "react-native";

type ExeraciseCardProps = { exercise: Exercise; onPress: () => void };

export default function ExerciseCard({
  exercise,
  onPress,
}: ExeraciseCardProps) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.cardBackground,
          justifyContent: "space-between",
          opacity: pressed ? 0.6 : 1,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text.primary, fontWeight: "bold" }}>
          {exercise.name}
        </Text>
      </View>
      <Feather name="chevron-right" size={Spacing.lg} color={theme.text.primary} />
    </Pressable>
  );
}
