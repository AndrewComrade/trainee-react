import React, {FC, ReactNode} from 'react';
import styles from './Modal.module.scss';
import classNames from "classnames";
import {Portal} from "@/components/Portal/Portal";

interface ModalProps {
  children: ReactNode;
  modalClassName?: string;
  modalContentClassName?: string;
}

export const Modal: FC<ModalProps> = ({children, modalClassName, modalContentClassName}) => {
    return (
      <Portal>
        <div className={classNames(styles.Modal, modalClassName)}>
          <div className={classNames(styles.modalContent, modalContentClassName)}>
            {children}
          </div>
        </div>
      </Portal>
    );
};


