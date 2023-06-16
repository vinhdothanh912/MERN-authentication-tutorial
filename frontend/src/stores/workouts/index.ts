import * as workoutActions from './workout-actions';
import * as workoutConstants from './workout-constants';
import userSlice from './workout-slice';

export const { getWorkouts } = workoutActions;
export const { EWorkoutActions } = workoutConstants;
export const { reducer: userReducer } = userSlice;
