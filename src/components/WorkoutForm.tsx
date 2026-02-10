import type { Exercise, WorkoutExercise, ExerciseSet } from "../types"
import { useState } from "react"
import { workoutService } from "../services/workoutService"

export const WorkoutForm = ({ exercises } : {exercises: Array<Exercise>}) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [duration, setDuration] = useState<number>(0)
  const [caloriesBurned, setCaloriesBurned] = useState<number>(0)
  const [notes, setNotes] = useState<string>('')
  const [selectedExercises, setSelectedExercises] = useState<Array<WorkoutExercise>>([])



  return (
    <h1>Add New Workout</h1>
  )
}