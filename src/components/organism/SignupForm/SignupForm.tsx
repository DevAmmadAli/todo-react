import React, { useState } from 'react';
import FormGroup from '../../molecule/FormGroup';
import Button from '../../atom/Button';
import styles from './SignupForm.module.scss';
import axiosInstance from '../../../interceptors/axios';
import { toastMessages } from '../../atom/ToastNotification';
import { useLoading, useToast } from '../../../contexts';
import { useNavigate } from 'react-router-dom';

const SignUpForm: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const { showToast } = useToast();
    const { setLoading } = useLoading();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setLoading(true);

            await axiosInstance.post('auth/register', formData);

            showToast(toastMessages.success('Sign upped successfully!'));

            navigate('/login');
        } catch (error: any) {
            showToast(toastMessages.error('Error while signing up!'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.signUpForm}>
            <FormGroup
                label="User Name"
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                name="username"
                error={errors.username}
            />
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
            <FormGroup
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                error={errors.confirmPassword}
            />
            <Button label="Sign Up" type="submit" />
            {errors && <p className={styles.error}>{errors.message}</p>}
        </form>
    );
};

export default SignUpForm;
