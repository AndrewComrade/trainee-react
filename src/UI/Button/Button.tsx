import React, {ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode} from 'react';
import styles from './Button.module.scss';
import classNames from "classnames";


type ButtonVariants = 'outlined' | 'filled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    variant?: ButtonVariants;
    disabled?: boolean;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        className,
        variant,
        disabled,
        ...otherProps
    } = props

    const buttonCls = classNames(styles.Button, className, variant)

    return (
        <button className={buttonCls} disabled={disabled} {...otherProps}>
            {children}
        </button>
    );
});
