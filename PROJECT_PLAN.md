# Workout Tracker App - Development Plan

## Project Overview
Building a workout tracking app to learn React development skills.

**Tech Stack:**
- React + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Local Storage (data persistence with fake API pattern)

---

## Development Steps

### ✅ Step 1: Project Setup (COMPLETED)
- [x] Initialize Vite project with React + TypeScript
- [x] Install and configure Tailwind CSS v4
- [x] Create folder structure (components, types, services, utils, data)
- [x] Clean up boilerplate code

### 🎯 Step 2: Define Data Models (CURRENT)
**File to create:** `src/types/index.ts`

Define TypeScript interfaces:
- **Exercise** - Exercise library item
  - `id`: string
  - `name`: string (e.g., "Bench Press")
  - `category`: string (e.g., "Strength", "Cardio", "Flexibility")
  - `muscleGroup`: string (e.g., "Chest", "Legs", "Back", "Arms", "Core", "Full Body")

- **WorkoutSet** - Single set data
  - `reps`: number
  - `weight`: number (kg or lbs)

- **WorkoutExercise** - Exercise within a workout session
  - `exerciseId`: string (references Exercise by id)
  - `sets`: WorkoutSet[]
  - `notes?`: string (optional)

- **WorkoutSession** - Complete workout
  - `id`: string
  - `date`: string (ISO date format)
  - `exercises`: WorkoutExercise[]
  - `duration?`: number (optional, in minutes)

---

### 📋 Step 3: Create Pre-populated Exercise Library
**File to create:** `src/data/exercises.ts`

Build exercise library with categories and muscle groups:
- **Strength exercises:** Bench Press, Squats, Deadlifts, Overhead Press, Barbell Row, etc.
- **Cardio exercises:** Running, Cycling, Jump Rope, Rowing, etc.
- **Flexibility exercises:** Yoga, Stretching, etc.

Organize by:
- Categories: Strength, Cardio, Flexibility
- Muscle Groups: Chest, Legs, Back, Arms, Shoulders, Core, Full Body

---

### 📋 Step 4: Build Fake API Service Layer
**File to create:** `src/services/workoutService.ts`

Implement async functions using localStorage:
- `getWorkoutSessions()` - Get all workout sessions
- `getWorkoutSessionById(id)` - Get single workout
- `createWorkoutSession(workout)` - Add new workout
- `updateWorkoutSession(id, workout)` - Update existing workout
- `deleteWorkoutSession(id)` - Delete workout
- `getExercises()` - Get exercise library
- `getExerciseHistory(exerciseId)` - Get history for specific exercise

Add `setTimeout` delays (100-300ms) to simulate API latency.

---

### 📋 Step 5: Create Core Components

**Components to build:**

1. **ExerciseSelector** (`src/components/ExerciseSelector.tsx`)
   - Display exercise library
   - Filter by category and muscle group
   - Select exercise for workout

2. **SetInput** (`src/components/SetInput.tsx`)
   - Input fields for reps and weight
   - Add/remove sets
   - Display list of sets

3. **WorkoutExerciseItem** (`src/components/WorkoutExerciseItem.tsx`)
   - Display single exercise in workout
   - Show all sets
   - Edit/delete functionality

4. **WorkoutSessionForm** (`src/components/WorkoutSessionForm.tsx`)
   - Add multiple exercises to session
   - Set workout date
   - Save workout session

5. **WorkoutSessionList** (`src/components/WorkoutSessionList.tsx`)
   - Display all workout sessions
   - Show date and exercises
   - Edit/delete actions

6. **WorkoutSessionCard** (`src/components/WorkoutSessionCard.tsx`)
   - Single workout display
   - Summary view (date, total exercises, duration)

---

### 📋 Step 6: Implement State Management & Data Flow

**Tasks:**
- Use `useState` for component-level state
- Use `useEffect` to load data from fake API
- Handle loading states (show spinners during API calls)
- Handle error states (show error messages)
- Implement CRUD operations through fake API

**Custom hooks to consider:**
- `useWorkouts()` - Manage workout sessions
- `useExercises()` - Manage exercise library

---

### 📋 Step 7: Add Routing with React Router

**Install:** `react-router-dom`

**Routes to create:**
- `/` - Home (dashboard/overview)
- `/workout/new` - Create new workout
- `/workout/:id` - View/edit workout
- `/history` - Workout history list
- `/exercise/:id` - Exercise history/progress

**Components:**
- Navigation bar with links
- Route configuration in App.tsx

---

### 📋 Step 8: Build Exercise History & Statistics

**Features:**
- View all sessions for specific exercise
- Calculate total volume (sets × reps × weight)
- Track personal records (PR)
- Show progression over time
- Basic stats: total workouts, favorite exercises

---

### 📋 Step 9: Polish UI with Tailwind

**Tasks:**
- Responsive design (mobile-first)
- Consistent color scheme
- Button styles and states
- Form styling
- Card layouts
- Loading spinners
- Error messages styling

---

### 📋 Step 10: Testing & Refinement

**Tasks:**
- Test all CRUD operations
- Test data persistence (reload page)
- Test edge cases (empty states, errors)
- Refine UX (add confirmations for delete)
- Add form validation

---

## Future Enhancements (After MVP)

- Charts/graphs for progress visualization
- Timer for workout duration
- Rest timer between sets
- Export/import workout data
- Dark mode
- Backend integration (replace fake API)
- User authentication
- Social features (share workouts)
- Exercise instructions/videos

---

## Current Status

**Completed:** Project setup with React, TypeScript, Vite, and Tailwind CSS  
**Next Task:** Define data models in `src/types/index.ts`  
**Current Step:** Step 2 - Define Data Models
