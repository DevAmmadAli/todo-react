import React from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    placeholder,
    value,
    onChange,
    name,
    error,
}) => {
    return (
        <div className={styles.inputField}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                className={styles.input}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default InputField;
