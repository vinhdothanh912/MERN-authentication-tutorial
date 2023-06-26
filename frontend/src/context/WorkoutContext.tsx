import { createContext, useReducer } from 'react';

import { EWorkoutActions, IWorkout } from 'src/stores/workouts/workout-constants';

export const WorkoutsContext = createContext<{
  state: IWorkoutsState;
  dispatch: React.Dispatch<IWorkoutsAction>;
}>({ state: { workouts: [] }, dispatch: () => null });

interface IWorkoutsState {
  workouts: IWorkout[];
}

interface IWorkoutsAction {
  type: EWorkoutActions;
  payload: IWorkout[];
}

const workoutsReducer = (state: IWorkoutsState, action: IWorkoutsAction) => {
  switch (action.type) {
    case EWorkoutActions.SET_WORKOUTS:
      return {
        workouts: action.payload,
      };
    case EWorkoutActions.CREATE_WORKOUT:
      return {
        workouts: [...action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] });

  return <WorkoutsContext.Provider value={{ state, dispatch }}>{children}</WorkoutsContext.Provider>;
};
