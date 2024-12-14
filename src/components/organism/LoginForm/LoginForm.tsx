import React, { useState } from 'react';
import FormGroup from '../../molecule/FormGroup';
import Button from '../../atom/Button';
import styles from './LoginForm.module.scss';
import axiosInstance from '../../../interceptors/axios';
import { toastMessages } from '../../atom/ToastNotification';
import { useLoading, useToast } from '../../../contexts';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const { showToast } = useToast();
    const { setLoading } = useLoading();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setLoading(true);

            const response = await axiosInstance.post('auth/login', formData);

            if (response.data.token) {
                localStorage.setItem('authToken', response.data.token);
                navigate('/todo');
            }
        } catch (error: any) {
            showToast(toastMessages.error('Error while logging in!'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.loginForm}>
            <FormGroup
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                error={errors.email}
            />
            <FormGroup
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                error={errors.password}
            />
            <Button label="Login" type="submit" />
        </form>
    );
};

export default LoginForm;
