import { Exercise, Workout } from "@/types";

export const workouts: Workout[] = [
  {
    id: 1,
    name: "Upper body",
    duration: 3600,
    exercise: [
      {
        id: 1,
        name: "Bench press",
        sets: [
          { reps: 10, weight: 80 },
          { reps: 9, weight: 80 },
          { reps: 10, weight: 70 },
        ],
      },
      {
        id: 2,
        name: "Incline dumbell press",
        sets: [
          { reps: 10, weight: 40 },
          { reps: 9, weight: 40 },
          { reps: 10, weight: 30 },
        ],
      },
      {
        id: 3,
        name: "Chest press",
        sets: [
          { reps: 10, weight: 70 },
          { reps: 9, weight: 70 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Legs",
    duration: 3600,
    exercise: [
      {
        id: 1,
        name: "Squats",
        sets: [
          { reps: 10, weight: 80 },
          { reps: 9, weight: 80 },
          { reps: 10, weight: 70 },
        ],
      },
      {
        id: 2,
        name: "Leg press",
        sets: [
          { reps: 10, weight: 40 },
          { reps: 9, weight: 40 },
          { reps: 10, weight: 30 },
        ],
      },
      {
        id: 3,
        name: "Calf raises",
        sets: [
          { reps: 10, weight: 70 },
          { reps: 9, weight: 70 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Pull day",
    duration: 3600,
    exercise: [
      {
        id: 1,
        name: "Pull ups",
        sets: [
          { reps: 10, weight: 20},
          { reps: 9, weight: 10 },
          { reps: 10, weight: 5 },
        ],
      },
      {
        id: 2,
        name: "Lat pulldowns",
        sets: [
          { reps: 10, weight: 40 },
          { reps: 9, weight: 40 },
          { reps: 10, weight: 30 },
        ],
      },
      {
        id: 3,
        name: "Rows",
        sets: [
          { reps: 10, weight: 70 },
          { reps: 9, weight: 70 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Arm day",
    duration: 3600,
    exercise: [
      {
        id: 1,
        name: "Bicep Curls",
        sets: [
          { reps: 10, weight: 80 },
          { reps: 9, weight: 80 },
          { reps: 10, weight: 70 },
        ],
      },
      {
        id: 2,
        name: "Cable rows",
        sets: [
          { reps: 10, weight: 40 },
          { reps: 9, weight: 40 },
          { reps: 10, weight: 30 },
        ],
      },
      {
        id: 3,
        name: "Hammer curl",
        sets: [
          { reps: 10, weight: 70 },
          { reps: 9, weight: 70 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Shoulder day",
    duration: 3600,
    exercise: [
      {
        id: 1,
        name: "Lat raises",
        sets: [
          { reps: 10, weight: 80 },
          { reps: 9, weight: 80 },
          { reps: 10, weight: 70 },
        ],
      },
      {
        id: 2,
        name: "Arnold press",
        sets: [
          { reps: 10, weight: 40 },
          { reps: 9, weight: 40 },
          { reps: 10, weight: 30 },
        ],
      },
      {
        id: 3,
        name: "Military press",
        sets: [
          { reps: 10, weight: 70 },
          { reps: 9, weight: 70 },
          { reps: 10, weight: 50 },
        ],
      },
    ],
  },
];
