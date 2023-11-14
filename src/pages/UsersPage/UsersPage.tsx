import React, {FC} from 'react';
import styles from './UsersPage.module.scss';
import {Container} from "@/layout";
import {UserList} from "@/components/User/ui";
import {AddUserModal} from "@/modules/addUserForm/components/AddUserModal/AddUserModal";
import {useModal} from "@/hooks";
import {Button} from "antd";

interface UsersPageProps {
}

export const UsersPage: FC<UsersPageProps> = () => {
  const {isOpen, handleOpen, handleClose} = useModal()

  return (
    <div className={styles.UsersPage}>
      <Container>
        <div className={styles.actions}>
          <Button type="primary" onClick={handleOpen}>
            Add User
          </Button>
        </div>
        <UserList className={styles.usersList}/>
      </Container>
      <AddUserModal isOpen={isOpen} handleClose={handleClose}/>
    </div>
  );
};
