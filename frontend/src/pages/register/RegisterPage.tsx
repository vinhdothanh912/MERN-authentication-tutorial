import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';
import './RegisterPage.scss';

const { Title, Paragraph, Link } = Typography;

const RegisterPage = () => {
  const navigate = useNavigate();

  const onFinish = async (values: unknown) => {
    console.log('@@values', values);
  };

  const goToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className="RegisterPage">
      <div className="RegisterPage-container">
        <Title className="RegisterPage-title">Meetmax</Title>
        <Paragraph className="RegisterPage-quote">Please enter your information to join with us</Paragraph>
        <Form className="RegisterPage-form" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: 'Please enter the email address' }]}>
            <Input size="large" placeholder="Email address" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter the password' }]}>
            <Input size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item name="repeatPassword" rules={[{ required: true, message: 'Please enter the repeat password' }]}>
            <Input size="large" placeholder="Repeat password" />
          </Form.Item>
          <Form.Item name="term" rules={[{ required: true, message: 'Please confirm the term' }]}>
            <Checkbox>
              Agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </Checkbox>
          </Form.Item>
          <Button className="RegisterPage-form__submitButton" type="primary" size="large" htmlType="submit">
            Sign Up
          </Button>
        </Form>
      </div>
      <div className="RegisterPage-footer">
        <Paragraph>
          Already have a account? <Link onClick={() => goToPage(RoutePaths.LOGIN)}>Sign In</Link>
        </Paragraph>
      </div>
    </div>
  );
};

export default RegisterPage;
