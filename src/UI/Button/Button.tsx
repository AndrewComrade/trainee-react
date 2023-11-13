import React, {ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";


type ButtonVariants = 'outlined' | 'filled'
type ButtonPaddings = '0' | '8' | '16' | '24'

const mapPaddingsToClass: Record<ButtonPaddings, string> = {
    '0': 'padd_0',
    '8': 'padd_8',
    '16': 'padd_16',
    '24': 'padd_24'
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    variant?: ButtonVariants;
    padding?: ButtonPaddings;
    disabled?: boolean;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        className,
        variant = 'outlined',
        padding = '8',
        disabled,
        ...otherProps
    } = props

    const paddingClass = mapPaddingsToClass[padding]

    const buttonModsCls = [className, styles[variant], styles[paddingClass]]

    return (
        <button className={classNames(styles.Button, buttonModsCls)} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
});
