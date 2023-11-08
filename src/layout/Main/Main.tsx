import React, {FC} from 'react';
import styles from './Main.module.scss';
import {Footer, Header} from "@/layout";
import {AppRouter} from "@/components";

interface MainProps {}

export const Main: FC<MainProps> = () => {
    return (
        <div className={styles.Main}>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    );
};
