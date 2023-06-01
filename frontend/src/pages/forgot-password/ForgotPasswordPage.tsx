import { Button, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';
import './ForgotPasswordPage.scss';

const { Title, Text, Link } = Typography;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className="ForgotPasswordPage">
      <div className="ForgotPasswordPage-container">
        <Title className="ForgotPasswordPage-title">Meetmax</Title>
        <Text className="ForgotPasswordPage-quote">Enter your email to get verification code</Text>
        <Form className="ForgotPasswordPage-form">
          <Form.Item name="email">
            <Input size="large" placeholder="Email address" />
          </Form.Item>
          <Form.Item>
            <Button className="ForgotPasswordPage-form__submitButton" type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className="ForgotPasswordPage-footer">
          <Link onClick={() => goToPage(RoutePaths.LOGIN)}>Sign In</Link>
          <Link onClick={() => goToPage(RoutePaths.REGISTER)}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
