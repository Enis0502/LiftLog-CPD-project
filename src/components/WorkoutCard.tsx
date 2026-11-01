import { View, Text, Image, Pressable } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { styles } from "@/style/styles";

export default function WorkoutCard() {
  return (
    <Pressable
      onPress={() => {
        console.log("Card pressed");
      }}
      style={({ pressed }) => [styles.card, { opacity: pressed ? 0.6 : 1.0 }]}
    >
      <Image style={styles.logo} source={require("@/assets/images/logo.png")} />

      <View
        style={{
          flexDirection: "column",
          marginLeft: 16,
        }}
      >
        <Text style={styles.t3}>Workout title</Text>
        <Text style={[styles.secondary, { marginTop: 8 }]}>Date</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text style={[styles.secondary, { marginRight: 16 }]}>
            Total excercise
          </Text>
          <Text style={[styles.secondary, { marginRight: 16 }]}>1000 kg</Text>
          <Text style={[styles.secondary, { marginRight: 16 }]}>
            Duration:{" "}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
