import React, {FC} from 'react';
import styles from './Footer.module.scss';
import {Container} from "@/layout";
import classNames from "classnames";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({className}) => {
    return (
        <div className={classNames(styles.Footer, className)}>
            <Container>
                Footer
            </Container>
        </div>
    );
};

