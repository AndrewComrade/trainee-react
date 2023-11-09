import React, {FC, ReactNode} from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
    maxWidth?: number;
    fluid?: boolean;
}

export const Container: FC<ContainerProps> = ({ children, maxWidth = 1060, fluid = false }) => {
    const containerStyle = {
        maxWidth: fluid ? '100%' : `${maxWidth}px`
    }

    return (
        <div className={styles.Container} style={containerStyle}>
            {children}
        </div>
    );
};
