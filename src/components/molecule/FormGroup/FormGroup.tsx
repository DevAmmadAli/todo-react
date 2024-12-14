import React from 'react';
import InputField from '../../atom/InputField';
import styles from './FormGroup.module.scss';

interface FormGroupProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    error?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
    label,
    type,
    placeholder,
    value,
    onChange,
    name,
    error,
}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <InputField
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                error={error}
            />
        </div>
    );
};

export default FormGroup;
