import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import WorkoutCard from "@/components/WorkoutCard";
import { styles } from "@/style/styles";
import { workouts } from "@/data/workouts";

export default function Index() {
  return (
    <ScrollView style={styles.background}>
      <View style={{ marginTop: 150 }}>
        <Text style={[styles.secondary, { marginBottom: 16 }]}>
          Your training
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.t1}>Workouts</Text>
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <Text style={[styles.lime, { fontSize: 24, fontWeight: "bold" }]}>
              5
            </Text>
            <Text style={styles.secondary}>This week</Text>
          </View>
        </View>
        <View
          style={[
            styles.card,
            {
              marginTop: 32,
              padding: 32,
              flexDirection: "row",
              justifyContent: "space-between",
            },
          ]}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.secondary}>Weekly volume</Text>
            <Text style={[styles.t2, { marginTop: 32 }]}>
              13455
              <Text style={[styles.lime, { fontSize: 20 }]}> kg</Text>
            </Text>
          </View>
          <View>
            <Image
              style={{
                width: 150,
                height: 100,
              }}
              source={require("@/assets/images/chart.png")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 24,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.t2}>Recent sessions</Text>
          <Text style={styles.secondary}>June</Text>
        </View>

        <View style={{ gap: 16 }}>
          {workouts.map((w) => (
            <WorkoutCard key={w.id} workout={w.name}></WorkoutCard>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
