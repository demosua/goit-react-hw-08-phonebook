import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
    token,
  };
};