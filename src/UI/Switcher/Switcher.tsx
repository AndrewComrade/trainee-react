import React, {FC} from 'react';
import styles from './Switcher.module.scss';

interface SwitcherProps {
    onChange: any;
}

export const Switcher: FC<SwitcherProps> = ({onChange}) => {
    return (
        <label className={styles.Switcher}>
            <input className={styles.input} type="checkbox" onChange={onChange}/>
            <span className={styles.slider}></span>
        </label>
    )
}
