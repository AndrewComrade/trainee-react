import React, {FC} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {Navigation} from "@/components";
import {RouteNamesEnum} from "@/routes";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    return (
        <div className={styles.Header}>
            <Link to={RouteNamesEnum.HOME}>
                HOME
            </Link>
            <div className={styles.navigationWrapper}>
                <Navigation/>
            </div>
        </div>
    );
};

