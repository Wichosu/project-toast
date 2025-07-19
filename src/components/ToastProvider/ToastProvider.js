import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastShelf, setToastShelf] = React.useState(false)
  const [listOfToasts, setListOfToasts] = React.useState([])

  function addToast({ variant, message }) {
    const newToast = {
      variant,
      message,
      id: crypto.randomUUID()
    }

    setListOfToasts((prevListOfToasts) => [...prevListOfToasts, newToast])
  }

  function removeToast(id) {
    setListOfToasts((prevListOfToasts) => prevListOfToasts.filter((toast) => toast.id !== id))
  }

  function showToastShelf() {
    setToastShelf(true)
  }

  const value = {
    addToast,
    removeToast,
    showToastShelf,
    toastShelf,
    listOfToasts
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
