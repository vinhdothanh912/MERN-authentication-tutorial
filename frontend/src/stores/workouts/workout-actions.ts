import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';

import { ApiClient } from 'src/services/api-client';
import { EWorkoutActions, IWorkout } from './workout-constants';

export const getWorkouts = createAsyncThunk(EWorkoutActions.GET_WORKOUTS, async (_, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<IWorkout[]> = await ApiClient.get(`/api/v1/workouts`);

    return response.data;
  } catch (err) {
    const error = err as AxiosError;
    if (!error.response) {
      throw err;
    }

    return rejectWithValue(error.response.data);
  }
});
