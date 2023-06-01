import { createSlice } from '@reduxjs/toolkit';

import { getUserProfile } from './user-actions';
import { IUserProfile } from './user-constants';

const initialState: IUserProfile = {
  id: '',
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.id = action.payload.name;
    });
  },
});

export default userSlice;
