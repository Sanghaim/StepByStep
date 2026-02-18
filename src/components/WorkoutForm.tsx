import type { Exercise, WorkoutExercise, ExerciseSet } from "../types"
import { useState } from "react"
import { workoutService } from "../services/workoutService"

export const WorkoutForm = ({ exercises } : {exercises: Array<Exercise>}) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0])
  const [duration, setDuration] = useState<number>(0)
  const [caloriesBurned, setCaloriesBurned] = useState<number>(0)
  const [notes, setNotes] = useState<string>('')
  const [selectedExercises, setSelectedExercises] = useState<Array<WorkoutExercise>>([])
  const [currentExerciseId, setCurrentExerciseId] = useState<string>('')



  return (
    <form>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
      <input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(Number(e.target.value))} />
      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      <select value={currentExerciseId} onChange={(e) => setCurrentExerciseId(e.target.value)}>
        <option value=''>Choose an exercise...</option>
        {exercises.map((exercise) => {
          return <option key={exercise.id} value={exercise.id}>{exercise.name} - {exercise.muscleGroup.join(', ').trimEnd()}</option>
        })}
      </select>
    </form>
  )
}