import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';

interface IProps {
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

const AuthLayout = ({ children, isAuthenticated }: IProps) => {
  if (!isAuthenticated) return <Navigate to={RoutePaths.LOGIN} />;

  return (
    <>
      {children} <Outlet />
    </>
  );
};

export default AuthLayout;
