import { Navigate } from "react-router-dom";
import useAdminStore from "../store/useAdminAuthentication";

const useUnprotectedRoutes = () => {
    const { isAdminLogin } = useAdminStore();
    console.log(isAdminLogin)
    if (isAdminLogin === true) {
        return <Navigate to="/dashboard" replace />;
    }
    return null;
}

export default useUnprotectedRoutes
