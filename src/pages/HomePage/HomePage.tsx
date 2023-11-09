import React, {FC} from 'react';
import styles from './HomePage.module.scss';
import {Link} from "react-router-dom";
import {RouteNamesEnum} from "@/routes";
import {Container} from "@/layout";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
    return (
        <div className={styles.HomePage}>
            <Container>
                Homes
            </Container>
        </div>
    );
};
