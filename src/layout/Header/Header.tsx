import React, {FC} from 'react';
import styles from './Header.module.scss';
import {Navigation} from "@/components";
import {Container} from "@/layout";
import {Switch} from "antd";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
  const handleSwitch = () => {
    console.log('Switched')
  }

  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.content}>
          <div className={styles.navigation}>
            <Navigation/>
          </div>
          <div className={styles.actions}>
            <Switch onChange={handleSwitch}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

