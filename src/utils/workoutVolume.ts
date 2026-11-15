import { Workout } from "@/types";

export function workoutVolume(workout: Workout) {
  return workout.exercise.reduce(
    (total, ex) => 
        total + ex.sets.reduce((sum, set) => sum + set.reps * set.weight, 0),
    0
  );
}
