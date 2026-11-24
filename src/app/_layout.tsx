import { FontSize } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const theme = useTheme();
  return (
    <>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text.primary,
          contentStyle: { backgroundColor: theme.background },
          headerBackButtonDisplayMode: "minimal",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home page",
            headerRight: () => (
              <Link
                href="/about"
                style={{ color: theme.text.primary, fontSize: FontSize.xxs }}
              >
                About
              </Link>
            ),
          }}
        />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack>
    </>
  );
}
