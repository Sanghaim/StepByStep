import { type Exercise } from '../types';

export const exercises: Array<Exercise> = [
  // Strength - Chest
  { id: 'bench-press', name: 'Bench Press', category: 'Strength', muscleGroup: ['Chest', 'Triceps'] },
  { id: 'incline-bench-press', name: 'Incline Bench Press', category: 'Strength', muscleGroup: ['Chest', 'Shoulders', 'Triceps'] },
  { id: 'dumbbell-flyes', name: 'Dumbbell Flyes', category: 'Strength', muscleGroup: ['Chest'] },
  { id: 'push-ups', name: 'Push-ups', category: 'Strength', muscleGroup: ['Chest', 'Triceps', 'Core'] },
  { id: 'dips', name: 'Dips', category: 'Strength', muscleGroup: ['Chest', 'Triceps'] },

  // Strength - Back
  { id: 'deadlift', name: 'Deadlift', category: 'Strength', muscleGroup: ['Back', 'Legs', 'Core'] },
  { id: 'barbell-row', name: 'Barbell Row', category: 'Strength', muscleGroup: ['Back', 'Biceps'] },
  { id: 'pull-ups', name: 'Pull-ups', category: 'Strength', muscleGroup: ['Back', 'Biceps'] },
  { id: 'lat-pulldown', name: 'Lat Pulldown', category: 'Strength', muscleGroup: ['Back', 'Biceps'] },
  { id: 't-bar-row', name: 'T-Bar Row', category: 'Strength', muscleGroup: ['Back'] },

  // Strength - Legs
  { id: 'squat', name: 'Squat', category: 'Strength', muscleGroup: ['Legs', 'Core'] },
  { id: 'leg-press', name: 'Leg Press', category: 'Strength', muscleGroup: ['Legs'] },
  { id: 'lunges', name: 'Lunges', category: 'Strength', muscleGroup: ['Legs'] },
  { id: 'leg-curl', name: 'Leg Curl', category: 'Strength', muscleGroup: ['Legs'] },
  { id: 'calf-raise', name: 'Calf Raise', category: 'Strength', muscleGroup: ['Legs'] },

  // Strength - Shoulders
  { id: 'overhead-press', name: 'Overhead Press', category: 'Strength', muscleGroup: ['Shoulders', 'Triceps'] },
  { id: 'lateral-raise', name: 'Lateral Raise', category: 'Strength', muscleGroup: ['Shoulders'] },
  { id: 'front-raise', name: 'Front Raise', category: 'Strength', muscleGroup: ['Shoulders'] },

  // Strength - Arms
  { id: 'bicep-curl', name: 'Bicep Curl', category: 'Strength', muscleGroup: ['Biceps'] },
  { id: 'hammer-curl', name: 'Hammer Curl', category: 'Strength', muscleGroup: ['Biceps'] },
  { id: 'tricep-extension', name: 'Tricep Extension', category: 'Strength', muscleGroup: ['Triceps'] },
  { id: 'skull-crusher', name: 'Skull Crusher', category: 'Strength', muscleGroup: ['Triceps'] },

  // Strength - Core
  { id: 'plank', name: 'Plank', category: 'Strength', muscleGroup: ['Core'] },
  { id: 'russian-twist', name: 'Russian Twist', category: 'Strength', muscleGroup: ['Core'] },
  { id: 'crunches', name: 'Crunches', category: 'Strength', muscleGroup: ['Core'] },

  // Cardio
  { id: 'running', name: 'Running', category: 'Cardio', muscleGroup: ['Legs', 'Full Body'] },
  { id: 'cycling', name: 'Cycling', category: 'Cardio', muscleGroup: ['Legs'] },
  { id: 'jump-rope', name: 'Jump Rope', category: 'Cardio', muscleGroup: ['Full Body'] },
  { id: 'rowing', name: 'Rowing', category: 'Cardio', muscleGroup: ['Full Body'] },
  { id: 'swimming', name: 'Swimming', category: 'Cardio', muscleGroup: ['Full Body'] },
  { id: 'elliptical', name: 'Elliptical', category: 'Cardio', muscleGroup: ['Legs', 'Full Body'] },
];