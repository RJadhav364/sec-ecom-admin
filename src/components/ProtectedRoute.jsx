import { Navigate, Outlet } from 'react-router-dom';
import useAdminStore from '../store/useAdminAuthentication';

const ProtectedRoute = () => {
  const isAuthenticated = useAdminStore((state) => state.isAdminLogin);
  console.log(isAuthenticated)
  // If not authenticated, redirect to login
  return isAuthenticated == true ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
