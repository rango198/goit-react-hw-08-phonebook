import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const {isLoad} = useSelector(state => state.auth);
  const { state } = useLocation();
  return !isLoad ? children : <Navigate to={state ? state : '/login'} />;
};

export default PublicRoute;
