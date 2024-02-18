import { useAuth } from '../../hook/useAuthSelector';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const { isLoggedIn } = useAuth();
  const { token } = useAuth();

  if (!isLoggedIn && token) {
    return <p>...Loading</p>;
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
