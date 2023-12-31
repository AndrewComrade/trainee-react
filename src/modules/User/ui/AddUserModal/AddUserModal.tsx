import React, {FC, memo} from 'react';
import {AddUserForm} from "@/modules/User/ui/AddUserForm/AddUserForm";
import {Modal} from "@/components";

interface AddUserModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const AddUserModal: FC<AddUserModalProps> = memo(({isOpen, handleClose}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <AddUserForm onClose={handleClose}/>
    </Modal>
  );
});
