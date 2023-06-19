import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks';

export default function PrivateRoute({ children }) {
  const isLoggedin = useAuth();
  return isLoggedin ? children : <Navigate to="/" />;
}