export enum EWorkoutActions {
  SET_WORKOUTS = 'SET_WORKOUTS',
  GET_WORKOUTS = 'GET_WORKOUTS',
  CREATE_WORKOUT = 'CREATE_WORKOUT',
}

export interface IWorkoutState {
  workouts: IWorkout[];
}

export interface IWorkoutBase {
  title: string;
  reps: number;
  load: number;
}

export interface IWorkout extends IWorkoutBase {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
