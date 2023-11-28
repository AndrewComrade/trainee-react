import React, {FC, ReactNode, useCallback, useEffect} from 'react';
import styles from './Modal.module.scss';
import classNames from "classnames";
import {Portal} from "@/components";
import {Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";

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

  const onContentClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }, []);

  const onEscapeKeydown = useCallback((event: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])


  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onEscapeKeydown)
    }

    return () => {
      document.removeEventListener('keydown', onEscapeKeydown)
    }
  }, [isOpen, onEscapeKeydown]);

  if (!isOpen) return null

  return (
    <Portal>
      <div className={classNames(styles.Modal, modalClassName)}>
        <div className={classNames(styles.modalContent, modalContentClassName)} onClick={onContentClick}>
          <Button
            type="default"
            icon={<CloseOutlined/>}
            className={styles.closeBtn}
            onClick={handleClose}
          />
          {children}
        </div>
      </div>
    </Portal>
  );
};


