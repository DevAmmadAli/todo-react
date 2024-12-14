import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { ToastMessage } from 'primereact/toast';

interface ToastNotificationProps {
    message?: ToastMessage;
    visible: boolean;
    onClose: () => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
    message,
    visible,
    onClose,
}) => {
    const toastRef = useRef<Toast>(null);

    useEffect(() => {
        if (visible && message) {
            toastRef.current?.show(message);
        }
    }, [visible, message]);

    return (
        <>
            <Toast ref={toastRef} position="top-right" onHide={onClose} />
        </>
    );
};

export default ToastNotification;
