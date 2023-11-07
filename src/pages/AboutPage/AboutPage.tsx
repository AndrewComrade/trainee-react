import React, {FC} from 'react';
import styles from './AboutPage.module.scss';

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = () => {
    return (
        <div className={styles.AboutPage}>
            AboutPage
        </div>
    );
};
