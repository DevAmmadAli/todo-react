import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'submit' | 'button';
    disabled?: boolean;
    icon?: string;
    isDangerBtn?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    disabled = false,
    icon,
    isDangerBtn,
    className = '',
}) => {
    return (
        <button
            className={`${styles.button} ${className} ${
                isDangerBtn && styles.buttonDanger
            }`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {icon && <i className={`pi ${icon} p-mr-2`}></i>} {label}
        </button>
    );
};

export default Button;
