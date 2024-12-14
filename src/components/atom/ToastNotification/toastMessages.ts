import { ToastMessage } from 'primereact/toast';

export const toastMessages = {
    success: (detail: string): ToastMessage => ({
        severity: 'success',
        summary: 'Success',
        detail,
        life: 3000,
    }),
    error: (detail: string): ToastMessage => ({
        severity: 'error',
        summary: 'Error',
        detail,
        life: 3000,
    }),
    info: (detail: string): ToastMessage => ({
        severity: 'info',
        summary: 'Info',
        detail,
        life: 3000,
    }),
    warn: (detail: string): ToastMessage => ({
        severity: 'warn',
        summary: 'Warning',
        detail,
        life: 3000,
    }),
};
