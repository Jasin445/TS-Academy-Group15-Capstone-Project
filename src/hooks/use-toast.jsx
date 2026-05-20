import { useSnackbar } from "notistack";
import { useRef } from "react";

const anchorOrigin = {
  horizontal: "center",
  vertical: "top",
};


const useToast = () => {
  const toastRef = useRef("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const successToastHandler = (message) => {
    closeSnackbar(toastRef.current);
    if (message) {
      enqueueSnackbar(message, {
        anchorOrigin,
        className: "toast-success-brand",
        variant: "success",
        autoHideDuration: 5000,
        action: (key) => (
          <button
            onClick={() => closeSnackbar(key)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: "0 4px", lineHeight: 1 }}
            aria-label="Close"
          >
            ✕
          </button>
        ),
      });
    }
  };

  const loadingToastHandler = (message) => {
    closeSnackbar();
    toastRef.current = enqueueSnackbar(message, {
      anchorOrigin,
      className: "toast-loading-brand",
      variant: "default",
      persist: true,
      action: (key) => (
        <button
          onClick={() => closeSnackbar(key)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: "0 4px", lineHeight: 1 }}
          aria-label="Close"
        >
          ✕
        </button>
      ),
    });
  };

  const errorToastHandler = (message) => {
    closeSnackbar();
    enqueueSnackbar(message, {
      anchorOrigin,
      className: "toast-error-brand",
      variant: "error",
      autoHideDuration: 3000,
      action: (key) => (
        <button
          onClick={() => closeSnackbar(key)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: "0 4px", lineHeight: 1 }}
          aria-label="Close"
        >
          ✕
        </button>
      ),
    });
  };

  const closeToast = () => {
    closeSnackbar();
  };

  return {
    errorToastHandler,
    successToastHandler,
    loadingToastHandler,
    closeToast,
  };
};

export default useToast;