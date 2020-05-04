import { uuid } from 'uuidv4';
import React, { createContext, useContext, useCallback, useState } from 'react';
import ToastContainer, { IToastMessage } from '../components/Toast';

interface IToastContext {
  addToast({ type, title, content }: Omit<IToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<IToastContext>({} as IToastContext);

export const useToast = (): IToastContext => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('useToast must be used within an ToastProvider');
  }

  return toastContext;
};

export const ToastProvider: React.FC = ({ children }) => {
  const [toastMessages, setToastMessage] = useState<IToastMessage[]>([]);

  const addToast = useCallback(({ type, title, content }) => {
    setToastMessage((state) => [
      ...state,
      { id: uuid(), type, title, content },
    ]);
  }, []);

  const removeToast = useCallback((id) => {
    setToastMessage((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={toastMessages} />
    </ToastContext.Provider>
  );
};
