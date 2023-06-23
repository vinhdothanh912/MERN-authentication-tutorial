import { Layout, Menu, MenuProps, Space, Typography, theme } from 'antd';
import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';
import './AuthLayout.scss';

const { Header, Content, Footer } = Layout;

interface IProps {
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

const AuthLayout = ({ children, isAuthenticated }: IProps) => {
  if (isAuthenticated) return <Navigate to={RoutePaths.LOGIN} />;

  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    {
      key: RoutePaths.HOME,
      label: 'Home',
    },
    {
      key: RoutePaths.WORKOUTS,
      label: 'Workouts',
    },
  ];

  const goToPage: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout className="AuthLayout">
      <Header className="AuthLayout-header">
        <Typography.Text className="AuthLayout-header__appName">MERN Tutorial</Typography.Text>
        <Menu
          className="AuthLayout-header__menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[RoutePaths.HOME]}
          items={items}
          onClick={goToPage}
        />
      </Header>
      <Content className="AuthLayout-contentContainer">
        {children} <Outlet />
      </Content>
      <Footer className="AuthLayout-footer">MERN tutorial authentication ©2023 by vinhdothanh912</Footer>
    </Layout>
  );
};

export default AuthLayout;
