import React, {FC} from 'react';
import {Modal} from "@/components/Modal/Modal";
import {AddUserForm} from "@/modules/addUserForm/components/AddUserForm/AddUserForm";

interface AddUserModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const AddUserModal: FC<AddUserModalProps> = ({isOpen, handleClose}) => {
    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <AddUserForm onClose={handleClose}/>
        </Modal>
    );
};
