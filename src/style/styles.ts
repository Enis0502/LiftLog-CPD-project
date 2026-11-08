import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

const dark = Colors.dark;
const light = Colors.light;

export const styles = StyleSheet.create({
  card: {
    backgroundColor: dark.cardBackground,
    flexDirection: "row",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 55,
    width: 55,
    borderRadius: 15,
  },
  secondary: {
    color: "#7e847c",
  },
  primary: {
    color: "#f6f7f4",
  },
  lime: {
    color: "#d7ff54",
  },
  t1: {
    color: "#f6f7f4",
    fontSize: 40,
    fontWeight: "bold",
  },
  t2: {
    color: "#f6f7f4",
    fontSize: 26,
    fontWeight: "bold",
  },
  t3: {
    color: "#f6f7f4",
    fontSize: 18,
    fontWeight: "bold",
  },
  background: {
    backgroundColor: "#2b342b",
    padding: 16,
    width: "100%",
    height: "100%",
  },

  //#f6f7f4 text color primary
  //#7e847c text color secondary
  //#d7ff54 lime
});
