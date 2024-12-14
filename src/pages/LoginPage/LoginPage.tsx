import React from 'react';
import AuthTemplate from '../../templates/AuthTemplate';
import LoginForm from '../../components/organism/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <AuthTemplate
            alt="Login"
            formTitle="Login"
            footerText="Don't have an account?"
            footerLink="/signup"
        >
            <LoginForm></LoginForm>
        </AuthTemplate>
    );
};

export default LoginPage;
