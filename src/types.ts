export type Exercise = {
    id: number,
    name: string,
    sets: WorkoutSet[]
}

export type WorkoutSet = {
    reps: number,
    weight: number //kg / lbs
}

export type Workout = {
    id: number,
    name: string,
    duration: number, //in seconds
    exercise : Exercise[] 
}

