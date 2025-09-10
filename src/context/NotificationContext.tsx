import React, { createContext, useContext, useState, type ReactNode, useCallback } from 'react';

interface NotificationContextType {
  showNotification: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const showNotification = useCallback((newMessage: string) => {
    setMessage(newMessage);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 3 seconds
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {/* We render the visual component here */}
      <Toast message={message} isVisible={isVisible} />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

// Toast component is included here for simplicity
const Toast: React.FC<{ message: string; isVisible: boolean }> = ({ message, isVisible }) => {
  return (
    <div
      className={`fixed bottom-5 right-5 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out
        ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
    >
      {message}
    </div>
  );
};