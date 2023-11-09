import React, {FC} from 'react';
import styles from './AboutPage.module.scss';
import {Container} from "@/layout";

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = () => {
    return (
        <div className={styles.AboutPage}>
            <Container>
                AboutPage
            </Container>
        </div>
    );
};
