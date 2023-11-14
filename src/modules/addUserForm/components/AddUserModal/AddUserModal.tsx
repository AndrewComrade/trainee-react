import React, {FC} from 'react';
import {Modal} from "@/components/Modal/Modal";

interface AddUserModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const AddUserModal: FC<AddUserModalProps> = ({isOpen, handleClose}) => {
    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            Add User Modal
        </Modal>
    );
};
