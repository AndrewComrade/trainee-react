import React, {FC} from 'react';
import styles from './Footer.module.scss';
import {Container} from "@/layout";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
    return (
        <div className={styles.Footer}>
            <Container>
                Footer
            </Container>
        </div>
    );
};

