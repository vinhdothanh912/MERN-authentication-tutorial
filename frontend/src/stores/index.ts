import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { useDispatch } from 'react-redux';
import { createReduxHistoryContext } from 'redux-first-history';
import thunk from 'redux-thunk';

import { loadingReducer } from './loading';
import { userReducer } from './user';

const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({
  history: createMemoryHistory(),
});

const middleware = [routerMiddleware, thunk];

const { routerReducer } = createReduxHistoryContext({
  history: createMemoryHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  loading: loadingReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const history = createReduxHistory(store);

export type TRootState = ReturnType<typeof store.getState>;

export type AppThunkDispatch = ThunkDispatch<TRootState, unknown, AnyAction>;

export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store;
