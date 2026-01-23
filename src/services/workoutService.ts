import type { Workout } from "../types";

const WORKOUTS_KEY = 'workouts';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const sampleWorkout: Workout = {
  id: crypto.randomUUID(),
  date: new Date().toISOString(), // Today's date
  exercises: [
    {
      exerciseId: 'bench-press', // Use an ID from your exercise library
      sets: [
        { reps: 10, weight: 60 },
        { reps: 8, weight: 65 },
        { reps: 6, weight: 70 }
      ],
      notes: 'Felt strong today!'
    },
    {
      exerciseId: 'squat',
      sets: [
        { reps: 12, weight: 80 },
        { reps: 10, weight: 90 }
      ]
    }
  ],
  duration: 45,
  caloriesBurned: 250,
  notes: 'Great workout session!'
};

export const workoutService = {
  async getWorkouts(): Promise<Array<Workout>> {
    await delay(500); // Simulate network delay
    const workouts = localStorage.getItem(WORKOUTS_KEY);
    return workouts ? JSON.parse(workouts) : [sampleWorkout];
  },

  async getWorkoutById(id: string): Promise<Workout | null> {
    await delay(500); // Simulate network delay
    const workouts = localStorage.getItem(WORKOUTS_KEY);
    if (!workouts) return null;
    return JSON.parse(workouts).find((w: Workout) => w.id === id) || null;
  },

  async createWorkout(workout: Omit<Workout, 'id'>): Promise<Workout> {
    await delay(500); // Simulate network delay
    const workoutsData = localStorage.getItem(WORKOUTS_KEY);
    const workouts: Workout[] = workoutsData ? JSON.parse(workoutsData) : [];
    const newWorkout: Workout = { id: crypto.randomUUID(), ...workout };
    workouts.push(newWorkout);
    localStorage.setItem(WORKOUTS_KEY, JSON.stringify(workouts));
    return newWorkout;
  },

  async updateWorkout(updatedWorkout: Partial<Workout>): Promise<Workout | null> {
    await delay(500); // Simulate network delay
    const workoutsData = localStorage.getItem(WORKOUTS_KEY);
    if (!workoutsData) return null;
    const workouts: Workout[] = JSON.parse(workoutsData);
    const index = workouts.findIndex(w => w.id === updatedWorkout.id);
    if (index === -1) return null;
    workouts[index] = { ...workouts[index], ...updatedWorkout };
    localStorage.setItem(WORKOUTS_KEY, JSON.stringify(workouts));
    return workouts[index];
  },

  async deleteWorkout(id: string): Promise<void> {
    await delay(500); // Simulate network delay
    const workoutsData = localStorage.getItem(WORKOUTS_KEY);
    if (workoutsData) {
      const workouts: Workout[] = JSON.parse(workoutsData);
      const updatedWorkouts = workouts.filter(w => w.id !== id);
      localStorage.setItem(WORKOUTS_KEY, JSON.stringify(updatedWorkouts));
    }
  }
}