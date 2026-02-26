import { toast, Bounce } from "react-toastify";

const defaultOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Bounce,
};

const useToast = () => {

    const toastSuccess = (message) => {
        toast.success(message, defaultOptions);
    };

    const toastError = (message) => {
        toast.error(message, defaultOptions);
    };

    const toastInfo = (message) => {
        toast.info(message, defaultOptions);
    };

    return { toastSuccess, toastError, toastInfo };
};

export default useToast;