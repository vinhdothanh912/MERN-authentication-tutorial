import { Col, Row, Skeleton, Space, Typography, notification } from 'antd';
import { useEffect, useState } from 'react';

import { ERROR_MESSAGE } from 'src/variables/constants/message';

import { useWorkoutsContext } from 'src/hooks/useWorkoutsContext';
import { createWorkoutService, getWorkoutsService } from 'src/services/workouts-service';
import { EWorkoutActions, IWorkoutBase } from 'src/stores/workouts/workout-constants';

import WorkoutDetails from './components/WorkoutDetails';
import WorkoutForm from './components/WorkoutForm';

const WorkoutsPageV2 = () => {
  const { state, dispatch } = useWorkoutsContext();
  const [loading, setLoading] = useState<EWorkoutActions | null>(null);

  const handleCreateWorkout = async (workout: IWorkoutBase) => {
    try {
      setLoading(EWorkoutActions.CREATE_WORKOUT);
      const workoutResponse = await createWorkoutService(workout);

      if (workoutResponse) {
        dispatch({ type: EWorkoutActions.CREATE_WORKOUT, payload: [workoutResponse] });
      }
      setLoading(null);
    } catch (error) {
      notification.error({ message: 'Error', description: ERROR_MESSAGE });
    }
  };

  useEffect(() => {
    const handleGetWorkouts = async () => {
      try {
        setLoading(EWorkoutActions.GET_WORKOUTS);
        const workouts = await getWorkoutsService();
        dispatch({ type: EWorkoutActions.SET_WORKOUTS, payload: workouts });
        setLoading(null);
      } catch (error) {
        notification.error({ message: 'Error', description: ERROR_MESSAGE });
      }
    };

    if (!state.workouts.length) {
      handleGetWorkouts();
    }
  }, []);

  return (
    <div className="WorkoutsPageV2">
      <Row gutter={40}>
        <Col span={16} className="WorkoutsPageV2-workoutsContainer">
          {loading === EWorkoutActions.GET_WORKOUTS ? (
            <Skeleton />
          ) : (
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              {state.workouts.map((workout) => (
                <WorkoutDetails workout={workout} key={workout._id} />
              ))}
            </Space>
          )}
        </Col>
        <Col span={8}>
          <Typography.Title level={4}>Add a new workout</Typography.Title>
          <WorkoutForm onSubmit={handleCreateWorkout} loading={loading === EWorkoutActions.CREATE_WORKOUT} />
        </Col>
      </Row>
    </div>
  );
};

export default WorkoutsPageV2;
