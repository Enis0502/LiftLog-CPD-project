import { Text, View, StyleSheet } from "react-native";
import WorkoutCard from "@/components/WorkoutCard";

export default function Index() {
  return (
    <View style={styles.container}>
      <WorkoutCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
