import { Card, Space, Typography } from 'antd';

import { IWorkout } from 'src/stores/workouts/workout-constants';

interface IWorkoutDetailsProps {
  workout: IWorkout;
}

const WorkoutDetails = ({ workout }: IWorkoutDetailsProps) => {
  return (
    <Card size="default">
      <Typography.Title type="success" level={2}>
        {workout.title}
      </Typography.Title>
      <Space direction="vertical">
        <Typography.Text>
          <b>Load (kg):</b> {workout.load}
        </Typography.Text>
        <Typography.Text>
          <b>Reps:</b> {workout.reps}
        </Typography.Text>
        <Typography.Text>
          <b>Created:</b> {workout.createdAt}
        </Typography.Text>
        <Typography.Text>
          <b>Updated:</b> {workout.updatedAt}
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default WorkoutDetails;
