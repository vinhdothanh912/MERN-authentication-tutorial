export enum EWorkoutActions {
  GET_WORKOUTS = 'GET_WORKOUTS',
}

export interface IWorkoutState {
  workouts: IWorkout[];
}

export interface IWorkout {
  id: string;
  title: string;
  reps: number;
  load: number;
}
