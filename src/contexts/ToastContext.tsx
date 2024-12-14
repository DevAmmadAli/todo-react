import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ToastMessage } from 'primereact/toast';
import ToastNotification from '../components/atom/ToastNotification';

interface ToastContextProps {
    showToast: (message: ToastMessage) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

    const showToast = (message: ToastMessage) => {
        setToastMessage(message);
        setToastVisible(true);
    };

    const hideToast = () => {
        setToastVisible(false);
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {toastMessage && (
                <ToastNotification
                    visible={toastVisible}
                    message={toastMessage}
                    onClose={hideToast}
                />
            )}
        </ToastContext.Provider>
    );
};
