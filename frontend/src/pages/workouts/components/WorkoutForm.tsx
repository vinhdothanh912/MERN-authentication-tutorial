import { Button, Form, Input } from 'antd';

import { IWorkoutBase } from 'src/stores/workouts/workout-constants';

interface IWorkoutFormProps {
  onSubmit: (values: IWorkoutBase) => void;
  loading: boolean;
}

const WorkoutForm = ({ onSubmit, loading }: IWorkoutFormProps) => {
  const [form] = Form.useForm();

  const handleSubmitForm = async (values: IWorkoutBase) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmitForm} layout="vertical">
      <Form.Item name="title" label="Excersize Title:" rules={[{ required: true, message: 'Please enter the title' }]}>
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item name="load" label="Load (in kg):" rules={[{ required: true, message: 'Please enter the load' }]}>
        <Input placeholder="Enter load" />
      </Form.Item>
      <Form.Item name="reps" label="Reps:" rules={[{ required: true, message: 'Please enter the reps' }]}>
        <Input placeholder="Enter reps" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add workout
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkoutForm;
