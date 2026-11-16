import { Spacing } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
  },
  logo: {
    height: 55,
    width: 55,
    borderRadius: 15,
  },
  t1: {
    fontSize: 40,
    fontWeight: "bold",
  },
  t2: {
    fontSize: 26,
    fontWeight: "bold",
  },
  t3: {
    fontSize: 18,
    fontWeight: "bold",
  },
  background: {
    flex: 1,
  },

  box: {
    flexWrap:"wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing.lg,
    gap: Spacing.md,
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
  //#f6f7f4 text color primary
  //#7e847c text color secondary
  //#d7ff54 lime
});
