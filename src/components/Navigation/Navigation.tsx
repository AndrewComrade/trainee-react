import React, {FC} from 'react';
import styles from './Navigation.module.scss';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
    return (
        <div className={styles.Navigation}>
            Navigation
        </div>
    );
};
