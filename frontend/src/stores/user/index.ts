import * as userActions from './user-actions';
import * as userConstants from './user-constants';
import userSlice from './user-slice';

export const { getUserProfile } = userActions;
export const { EUserActions } = userConstants;
export const { reducer: userReducer } = userSlice;
