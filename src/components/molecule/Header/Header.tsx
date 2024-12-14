import Logo from '../../atom/Logo';
import styles from './Header.module.scss';
import Button from '../../atom/Button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    logoUrl: string;
    alt: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, alt }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Logo logoUrl={logoUrl} alt={alt} />
                </div>
                <div className={styles.right}>
                    <Button
                        label="Logout"
                        isDangerBtn={true}
                        onClick={handleLogOut}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
