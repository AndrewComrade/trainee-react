import React, {FC} from 'react';
import styles from './UsersPage.module.scss';
import {Container} from "@/layout";
import {AddUserModal, UserList} from "@/modules/User";
import {useModal} from "@/hooks";
import {Button} from "antd";

export const UsersPage: FC = () => {
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
