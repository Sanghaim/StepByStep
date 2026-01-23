import type { Exercise, WorkoutExercise } from "../types"

export const ExerciseList = ({ workoutExercises, exerciseList }: { workoutExercises: Array<WorkoutExercise>, exerciseList: Array<Exercise>}) => {
  return <ul className="space-y-2">
  {workoutExercises.map((exercise) => {
    const exerciseData = exerciseList.find(ex => ex.id === exercise.exerciseId)
    
    if (!exerciseData) {
      return <div className="text-red-500">Exercise not found</div>
    }

    return (
      <li key={exercise.exerciseId}>
        <span>{exerciseData?.name} - {exercise.sets.length} sets</span>
        <ul className="ml-4">
        {exercise.sets.map((set, index) => 
          <li key={`${exercise.exerciseId}-${index}`} className='ml-4 text-sm text-gray-400'>
            {set.reps} reps × {set.weight} kg
          </li>
        )}
        </ul>
        
        {exercise.notes && (
          <p className="text-sm text-gray-500 italic ml-4">{exercise.notes}</p>
        )}
      </li>
    )
  })}
</ul>
}