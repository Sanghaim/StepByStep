import { useState, useEffect } from 'react';
import { type Exercise, type Workout } from '../types';
import { workoutService } from '../services/workoutService';
import { ExerciseList } from './ExerciseList';

export const WorkoutList = ({ exercises }: { exercises: Array<Exercise>}) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await workoutService.getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) {
    return <div>Loading workouts...</div>
  }

  if (workouts.length === 0) {
    return <div>No workouts yet. Let's add some!</div>

  }

  return (
    <section className='bg-gray-800 w-1/4 min-w-60 border-4 border-black rounded-r-xl text-gray-300'>
      <h2 className='p-4 text-2xl font-extrabold'>Workouts</h2>
      <div>
        <ul className='space-y-4'>
          {workouts.map((workout) => 
            <li key={workout.id} className='p-6 bg-gray-700 m-2 border-stone-700 rounded-lg border-2 space-y-2'>
              <h3 className='text-xl font-bold mb-2 text-white'>{new Date(workout.date).toLocaleDateString()}</h3>
              <div>Number of exercises: {workout.exercises.length}</div>
              <ExerciseList workoutExercises={workout.exercises} exerciseList={exercises} />
              { workout.notes && <div className='font-light'>{workout.notes}</div>}
              <div className='space-x-4'>
                { workout.duration && <span className='font-light'>{workout.duration} minutes</span> }
                { workout.caloriesBurned && <span className='font-light'>{workout.caloriesBurned} kcal</span>}
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
};