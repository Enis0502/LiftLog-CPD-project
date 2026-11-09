import { useTheme } from "@/hooks/useTheme";
import { styles } from "@/style/styles";
import { Image, Pressable, Text, View } from "react-native";

//type Props = { workout: Workout; onPress?: () => void };

export default function WorkoutCard({ workout }: { workout: string }) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={() => {
        console.log("Card pressed");
      }}
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.6 : 1.0, backgroundColor: theme.cardBackground },
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
          {workout}
        </Text>
        <Text style={{ marginTop: 8, color: theme.text.secondary }}>Date</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            Total excercises
          </Text>
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            1000 kg
          </Text>
          <Text style={{ marginRight: 16, color: theme.text.secondary }}>
            Duration:{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
