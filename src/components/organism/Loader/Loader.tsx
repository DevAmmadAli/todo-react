import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';
import styles from './Loader.module.scss';
import { useLoading } from '../../../contexts';

const Loader: React.FC = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className={styles.loaderContainer}>
            <ProgressSpinner />
        </div>
    );
};

export default Loader;
