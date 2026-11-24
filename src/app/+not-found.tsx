import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFound() {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={[styles.t1, { color: theme.text.primary }]}>
        Page not found
      </Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: theme.buttonSecondary,
            marginTop: Spacing.xl,
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Link href="/" replace>
          Go to Home page
        </Link>
      </Pressable>

      <Stack.Screen options={{ title: "Not Found" }}></Stack.Screen>
    </View>
  );
}
