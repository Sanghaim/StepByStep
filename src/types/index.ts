export type ExerciseCategory = 'Cardio' | 'Strength' 
export type MuscleGroup = 'Chest' | 'Back' | 'Legs' | 'Biceps' | 'Triceps' | 'Shoulders' | 'Core' | 'Full Body'

export interface Exercise {
    id: string
    name: string
    category: ExerciseCategory
    muscleGroup: Array<MuscleGroup>
}

export interface ExerciseSet {
    reps: number
    weight: number // in kilograms
}

export interface WorkoutExercise {
    exerciseId: string
    sets: Array<ExerciseSet>
    notes?: string
}

export interface Workout {
    id: string
    date: string // ISO date string
    exercises: Array<WorkoutExercise>
    duration?: number // in minutes
    caloriesBurned?: number
    notes?: string
}