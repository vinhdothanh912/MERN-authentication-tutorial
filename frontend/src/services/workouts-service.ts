import { AxiosResponse } from 'axios';

import { ApiClient } from 'src/services/api-client';
import { IWorkout, IWorkoutBase } from 'src/stores/workouts/workout-constants';

export const getWorkoutsService = async () => {
  const response: AxiosResponse<IWorkout[]> = await ApiClient.get(`/api/v1/workouts`);

  return response.data;
};

export const createWorkoutService = async (payload: IWorkoutBase) => {
  const response: AxiosResponse<IWorkout> = await ApiClient.post(`/api/v1/workouts/create`, payload);

  return response.data;
};
