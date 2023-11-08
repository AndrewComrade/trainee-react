import React, {FC} from 'react';
import styles from './HomePage.module.scss';
import {Link} from "react-router-dom";
import {RouteNamesEnum} from "@/routes";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
    return (
        <div className={styles.HomePage}>
            <Link to={RouteNamesEnum.ABOUT}>
                To About Page
            </Link>
        </div>
    );
};
