import AboutCard from "@/components/AboutCard";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FEATURES = [
  {
    icon: "check-square",
    title: "Log every set",
    text: "Reps and weight, set by set.",
  },
  {
    icon: "bar-chart-2",
    title: "Track your volume",
    text: "Total kg lifted per workout.",
  },
  {
    icon: "moon",
    title: "Light and dark",
    text: "Follows your phone's theme.",
  },
] as const;

export default function About() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: Spacing.md,
        paddingBottom: Spacing.md + insets.bottom,
        gap: Spacing.lg,
      }}
    >
      <View
        style={{
          backgroundColor: theme.background,
          alignItems: "center",
          gap: Spacing.md,
        }}
      >
        <Image
          style={[styles.logo, { height: 85, width: 85 }]}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={[styles.t1, { color: theme.text.primary }]}>LiftLog</Text>
        <Text style={{ color: theme.text.secondary }}>Version 1.0.0</Text>
        <Text style={{ color: theme.text.primary, textAlign: "center" }}>
          LiftLog is a simple workout tracker. Log your exercises set by set,
          see how much you lifted and look back at your sessions.
        </Text>
      </View>

      <View style={{ marginTop: Spacing.lg, gap: Spacing.lg }}>
        <Text style={[styles.t1, { color: theme.text.primary }]}>
          What it does
        </Text>
        <View style={{ gap: Spacing.md }}>
          {FEATURES.map((f) => (
            <AboutCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              text={f.text}
            />
          ))}
        </View>
      </View>
      <Text style={{ color: theme.text.secondary, textAlign: "center" }}>
        Built with React Native, Expo and TypeScript. Developed by Enis
        Bulbulusic
      </Text>
    </ScrollView>
  );
}
