import React, {FC} from 'react';
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
    return (
        <div className={styles.HomePage}>
            HomePage
        </div>
    );
};
