import { FontSize, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Pressable, Text, View } from "react-native";

type ErrorStateProp = { onRetry: () => void };

export default function ErrorState({ onRetry }: ErrorStateProp) {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        gap: Spacing.xl,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: theme.text.primary }}>
        Could not load the workouts.
      </Text>
      <Pressable
        onPress={onRetry}
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.6 : 1.0,
            backgroundColor: theme.text.highlight,
          },
        ]}
      >
        <Text style={{ fontSize: FontSize.xxs }}>Try again</Text>
      </Pressable>
    </View>
  );
}
