import styles from './Footer.module.scss';

const Footer: React.FC<{ data: string }> = ({ data }) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {!data && <></>}
                {data}
            </div>
        </footer>
    );
};
export default Footer;
