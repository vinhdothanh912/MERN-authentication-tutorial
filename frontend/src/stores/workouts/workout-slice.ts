import { createSlice } from '@reduxjs/toolkit';

import { getWorkouts } from './workout-actions';
import { IWorkoutState } from './workout-constants';

const initialState: IWorkoutState = {
  workouts: [],
};

export const userSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWorkouts.fulfilled, (state, action) => {
      state.workouts = action.payload;
    });
  },
});

export default userSlice;
