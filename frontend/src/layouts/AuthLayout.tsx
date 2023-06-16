import { Layout, Menu, MenuProps, Typography, theme } from 'antd';
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
        <Typography.Text color={theme.defaultSeed.colorError}>MERN Tutorial</Typography.Text>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[RoutePaths.HOME]} items={items} onClick={goToPage} />
      </Header>
      <Content className="AuthLayout-contentContainer">
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className="AuthLayout-content" style={{ background: colorBgContainer }}>
          {children} <Outlet />
        </div>
      </Content>
      <Footer className="AuthLayout-footer">MERN tutorial authentication ©2023 by vinhdothanh912</Footer>
    </Layout>
  );
};

export default AuthLayout;
