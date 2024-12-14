import styles from './Card.module.scss';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    elevation?: 'Flat' | 'Raised';
    heading?: {
        title: string;
        icon?: string;
        color: string;
    };
}

const Card = ({ children, className, elevation, heading }: CardProps) => {
    const css = [
        styles.card,
        className,
        styles[elevation || 'Raised'],
        heading ? styles.heading : '',
    ].join(' ');

    return (
        <div className={css}>
            {heading && (
                <div
                    className={styles.title}
                    style={{ backgroundColor: heading.color }}
                >
                    {heading?.icon && (
                        <span className="icon">{heading.icon}</span>
                    )}
                    <h4 className="p-0 m-0">{heading.title}</h4>
                </div>
            )}
            {children}
        </div>
    );
};
export default Card;
