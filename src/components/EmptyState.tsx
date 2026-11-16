import { FontSize } from "@/constants/theme";
import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Text, View } from "react-native";

type EmptyStateProp = { title: string; message: string };

export default function EmptyState({ title, message }: EmptyStateProp) {
  const theme = useTheme();
  return (
    <View style={styles.box}>
      <Text style={[styles.t2, { color: theme.text.primary }]}>{title}</Text>
      <Text style={[{textAlign:"center", color: theme.text.secondary, fontSize: FontSize.xxs }]}>
        {message}
      </Text>
    </View>
  );
}
