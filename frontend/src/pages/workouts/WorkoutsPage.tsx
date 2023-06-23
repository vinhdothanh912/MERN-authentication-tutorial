import { Col, Row, Skeleton, Space, Typography, notification } from 'antd';
import { useEffect, useState } from 'react';

import { useAppDispatch, TRootState } from 'src/stores';
import { EWorkoutActions, createWorkout, getWorkouts } from 'src/stores/workouts';
import { IWorkout, IWorkoutBase } from 'src/stores/workouts/workout-constants';
import { ERROR_MESSAGE } from 'src/variables/constants/message';
import './WorkoutsPage.scss';
import WorkoutDetails from './components/WorkoutDetails';
import { useSelector } from 'react-redux';
import WorkoutForm from './components/WorkoutForm';

const WorkoutsPage = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: TRootState) => state.loading);

  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  const handleGetWorkouts = async () => {
    try {
      const response = await dispatch(getWorkouts()).unwrap();

      setWorkouts(response);
    } catch (error) {
      notification.error({ message: 'Error', description: ERROR_MESSAGE });
    }
  };

  const handleCreateWorkout = async (workout: IWorkoutBase) => {
    try {
      const response = await dispatch(createWorkout(workout)).unwrap();

      if (response) {
        handleGetWorkouts();
      }
    } catch (error) {
      notification.error({ message: 'Error', description: ERROR_MESSAGE });
    }
  };

  useEffect(() => {
    handleGetWorkouts();
  }, []);

  return (
    <div className="WorkoutsPage">
      <Row gutter={40}>
        <Col span={16} className="WorkoutsPage-workoutsContainer">
          {loading[EWorkoutActions.GET_WORKOUTS] ? (
            <Skeleton />
          ) : (
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              {workouts.map((workout) => (
                <WorkoutDetails workout={workout} key={workout._id} />
              ))}
            </Space>
          )}
        </Col>
        <Col span={8}>
          <Typography.Title level={4}>Add a new workout</Typography.Title>
          <WorkoutForm onSubmit={handleCreateWorkout} loading={loading[EWorkoutActions.CREATE_WORKOUT]} />
        </Col>
      </Row>
    </div>
  );
};

export default WorkoutsPage;
