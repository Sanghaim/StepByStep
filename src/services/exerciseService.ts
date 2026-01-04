import { type Exercise } from "../types";
import { exercisesSeed } from "../data/exercisesSeed";

const EXERCISES_KEY = 'exercises';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const exerciseService = {
  async getExercises(): Promise<Exercise[]> {
    await delay(500); // Simulate network delay
    const storedExercises = localStorage.getItem(EXERCISES_KEY)
    if (!storedExercises) {
        localStorage.setItem(EXERCISES_KEY, JSON.stringify(exercisesSeed))
        return exercisesSeed
    };
    return JSON.parse(storedExercises);
  }
}