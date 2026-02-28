import { Navigate, Outlet } from 'react-router-dom';
import useAdminStore from '../store/useAdminAuthentication';
import Sidebar, { SidebarItem } from '../layout/partials/Sidebar';

const ProtectedRoute = () => {
  const isAuthenticated = useAdminStore((state) => state.isAdminLogin);
  console.log(isAuthenticated)
  // If not authenticated, redirect to login
  return isAuthenticated == true ?
    <section className='flex'>
      <Sidebar>
        <SidebarItem text="Dashboard" alert />
      </Sidebar>
      <Outlet /></section> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
