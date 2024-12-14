import styles from './Logo.module.scss';

interface LogoProps {
    logoUrl: string;
    alt: string;
}

const Logo: React.FC<LogoProps> = ({ logoUrl, alt }) => {
    return (
        <div className={styles.logo}>
            <img src={logoUrl} width={140} height={34} alt={alt} />
        </div>
    );
};

export default Logo;
