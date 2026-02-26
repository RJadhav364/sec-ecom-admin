import { Navigate, Outlet } from 'react-router-dom';
import useAdminStore from '../store/useAdminAuthentication';

const ProtectedRoute = () => {
  const isAuthenticated = useAdminStore((state) => state.isAdminLogin);
  
  // If not authenticated, redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
