import { View, Text, Image, Pressable } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

export default function WorkoutCard() {
  return (
    <Pressable
      onPress={() => {
        console.log("Card pressed");
      }}
      style={({ pressed }) => {
        return {
          backgroundColor: "gray",
          flexDirection: "row",
          marginHorizontal: 8,
          padding: 16,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed ? 0.6 : 1,
        };
      }}
    >
      <Image
        style={{
          height: 65,
          width: 65,
        }}
        source={require("@/assets/images/favicon.png")}
      />

      <View
        style={{
          flexDirection: "column",
          marginLeft: 16,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Workout title
        </Text>
        <Text
          style={{
            marginTop: 8,
            color: "white",
          }}
        >
          Date
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: "white",
              marginRight: 16,
            }}
          >
            Total excercises
          </Text>
          <Text
            style={{
              color: "white",
              marginRight: 16,
            }}
          >
            1000 kg
          </Text>
          <Text
            style={{
              color: "white",
              marginRight: 16,
            }}
          >
            Duration
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
