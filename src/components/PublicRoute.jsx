import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks';

export default function PublicRoute({ children, restricted = false }) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}