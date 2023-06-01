import { Navigate, Outlet } from 'react-router-dom';

import { RoutePaths } from 'src/routes/routes-constants';

interface IProps {
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

const NonAuthLayout = ({ children, isAuthenticated }: IProps) => {
  if (isAuthenticated) return <Navigate to={RoutePaths.HOME} />;

  return (
    <div style={{ backgroundImage: `url("src/assets/images/bg-non-auth.png")` }}>
      {children} <Outlet />
    </div>
  );
};

export default NonAuthLayout;
