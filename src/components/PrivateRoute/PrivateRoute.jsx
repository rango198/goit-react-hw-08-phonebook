import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const {isLoad} = useSelector(state => state.auth);
  const location = useLocation();

  return isLoad ? children : <Navigate to={'/login'} state={location} />;
};

export default PrivateRoute;
