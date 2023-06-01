import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';
import './LoginPage.scss';

const { Title, Paragraph, Link } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values: unknown) => {
    console.log('@@values', values);
  };

  const goToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage-container">
        <Title className="LoginPage-title">Meetmax</Title>
        <Paragraph className="LoginPage-quote">
          Meetmax helps you connect and share with the people in your life.
        </Paragraph>
        <Form className="LoginPage-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please enter the email address' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input size="large" placeholder="Email address" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter the password' },
              // { min: 8, message: 'Please enter at least 8 characters' },
            ]}
          >
            <Input size="large" placeholder="Password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button className="LoginPage-form__submitButton" type="primary" size="large" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <div className="LoginPage-footer">
          <Link onClick={() => goToPage(RoutePaths.REGISTER)}>Sign Up</Link>
          <Link onClick={() => goToPage(RoutePaths.FORGOT_PASSWORD)}>Forgotten password?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
