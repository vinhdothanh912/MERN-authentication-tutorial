import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { ApiClient } from 'src/services/api-client';
import { EUserActions, IUserProfile } from './user-constants';

export const getUserProfile = createAsyncThunk(EUserActions.GET_USER_PROFILE, async () => {
  const response: AxiosResponse<IUserProfile> = await ApiClient.get(`/api/v1/account/me`);

  return response.data;
});
