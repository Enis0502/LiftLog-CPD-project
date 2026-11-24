import { Workout } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Alert } from "react-native";

type ConfirmDeleteProps = {
  workout: Workout;
  setWorkouts: Dispatch<SetStateAction<Workout[]>>;
};

export default function confirmDelete({
  workout,
  setWorkouts,
}: ConfirmDeleteProps) {
  Alert.alert("Delete workout?", `${workout.name} will be deleted.`, [
    { text: "Cancel", style: "cancel" },
    {
      text: "Delete",
      style: "destructive",
      onPress: () =>
        setWorkouts((prev) => prev.filter((w) => w.id !== workout.id)),
    },
  ]);
}