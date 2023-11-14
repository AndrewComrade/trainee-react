import React, {FC, ReactNode} from 'react';
import styles from './Modal.module.scss';
import classNames from "classnames";
import {Portal} from "@/components/Portal/Portal";

interface ModalProps {
  children: ReactNode;
  modalClassName?: string;
  modalContentClassName?: string;
  isOpen: boolean;
  handleClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    modalClassName,
    modalContentClassName,
    isOpen,
    handleClose
  } = props

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!isOpen) return null

  return (
    <Portal>
      <div className={classNames(styles.Modal, modalClassName)} onClick={handleClose}>
        <div className={classNames(styles.modalContent, modalContentClassName)} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};


