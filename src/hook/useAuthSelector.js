import { useSelector } from 'react-redux';
import {
  selectToken,
  selectUser,
  selectIsRefreshing,
  selectIsLogin,
} from '../redux/selects.js';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    token,
    isLoggedIn,
    user,
    isRefreshing,
  };
};
