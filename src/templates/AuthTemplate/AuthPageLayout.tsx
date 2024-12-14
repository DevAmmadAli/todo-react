import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthTemplate.module.scss';

interface AuthTemplateProps {
    children: React.ReactNode;
    alt: string;
    formTitle: string;
    footerText: string;
    footerLink: string;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({
    children,
    alt,
    formTitle,
    footerText,
    footerLink,
}) => {
    return (
        <div className={styles.authPage}>
            <div className={styles.imageContainer}>
                <img
                    src="/logo512.png"
                    alt="auth-pic"
                    className={styles.image}
                />
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>{formTitle}</h2>
                <div className={styles.children}>{children}</div>
                <div className={styles.footer}>
                    <p>
                        {footerText}{' '}
                        <Link to={footerLink}>
                            {formTitle === 'Login' ? 'Sign Up' : 'Login'}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthTemplate;
