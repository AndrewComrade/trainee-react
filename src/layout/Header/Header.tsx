import React, {FC} from 'react';
import styles from './Header.module.scss';
import {Navigation} from "@/components";
import {Container} from "@/layout";
import {Switcher} from "@/UI";
import {useTheme} from "@/hooks/useTheme/useTheme";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    const [theme, setTheme] = useTheme()


    return (
        <div className={styles.Header}>
            <Container fluid={true}>
                <div className={styles.contentWrapper}>
                    <div className={styles.navigationWrapper}>
                        <Navigation/>
                    </div>
                    <div className={styles.actionsWrapper}>
                        <Switcher onChange={setTheme}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

