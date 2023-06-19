import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks';

export default function PublicRoute({ children, restricted = false }) {
  const { isLoggedin } = useAuth();
  const shouldRedirect = isLoggedin && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}