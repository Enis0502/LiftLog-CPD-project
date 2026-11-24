import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import Feather from "@expo/vector-icons/Feather";
import { ComponentProps } from "react";
import { Text, View } from "react-native";

type aboutProps = {
  title: string;
  text: string;
  icon: ComponentProps<typeof Feather>["name"];
};

export default function AboutCard({ title, text, icon }: aboutProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: theme.cardBackground, gap: Spacing.md },
      ]}
    >
      <View
        style={[
          styles.logo,
          {
            backgroundColor: theme.background,
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Feather name={icon} size={28} color={theme.text.highlight} />
      </View>

      <View style={{ flexDirection: "column", gap: Spacing.sm }}>
        <Text style={[styles.t3, { color: theme.text.primary }]}>{title}</Text>
        <Text style={{ color: theme.text.secondary }}>{text}</Text>
      </View>
    </View>
  );
}
