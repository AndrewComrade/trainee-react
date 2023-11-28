import React, {FC, memo} from 'react';
import styles from './Footer.module.scss';
import {Container} from "@/layout";
import classNames from "classnames";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = memo(({className}) => {
    return (
        <div className={classNames(styles.Footer, className)}>
            <Container>
                Footer
            </Container>
        </div>
    );
});

