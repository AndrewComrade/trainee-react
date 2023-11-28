import React, {FC, memo} from 'react';
import styles from './Navigation.module.scss';
import {routes} from "@/routes";
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = memo(() => {
    const location = useLocation()

    return (
        <div className={styles.Navigation}>
            {!!routes.length && routes.map(({path, name}) => (
                <Link key={name} to={path} className={classNames(styles.navigationLink, {
                    [styles.activeLink]: location.pathname === path
                })}>
                    {name}
                </Link>
            ))}
        </div>
    );
});
