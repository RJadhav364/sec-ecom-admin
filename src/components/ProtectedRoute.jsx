import { Navigate, Outlet } from 'react-router-dom';
import useAdminStore from '../store/useAdminAuthentication';
import Sidebar from '../layout/partials/Sidebar';

const ProtectedRoute = () => {
  const isAuthenticated = useAdminStore((state) => state.isAdminLogin);
  return isAuthenticated == true ?
    <section className='flex'>
      <Sidebar />
      <Outlet /></section> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
