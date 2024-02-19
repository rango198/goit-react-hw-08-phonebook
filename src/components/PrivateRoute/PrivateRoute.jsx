import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hook/useAuthSelector';

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  const { token } = useAuth();
  console.log(token);
  console.log(isLoggedIn);

  if (isLoggedIn && !token) {
    return <p>...Loading</p>;
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
