import { useEffect, useState } from "react"
import { WorkoutList } from "./components/WorkoutList"
import type { Exercise } from "./types"
import { exerciseService } from "./services/exerciseService"

function App() {
  const [exercises, setExercises] = useState<Exercise[]>([])

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const exercicesResponse = await exerciseService.getExercises()
        setExercises(exercicesResponse)
      } catch (error: unknown) {
        console.error(error)
      }
    }

    fetchExercises()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Workout Tracker</h1>
      </header>
      <main className="container mx-auto p-4">
        <p className="text-center text-gray-600 mt-8">
          Welcome to your Workout Tracker! Let's get started.
        </p>
      </main>

      <WorkoutList exercises={exercises}></WorkoutList>
    </div>
  )
}

export default App
