import { ToastContainer } from 'react-toastify';

export const ToastContainerStyled = () => {
  return (
    <ToastContainer
    position="top-center"
    autoClose={500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
  );
}