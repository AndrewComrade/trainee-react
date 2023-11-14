import React, {FC} from 'react';
import styles from './UserList.module.scss';
import classNames from "classnames";
import {useAppSelector} from "@/store";
import {getUsers} from "@/components/User/model/selectors/getUsers";
import {UserListItem} from "@/components/User/ui/UserListItem/UserListItem";

interface UserListProps {
  className?: string;
}

export const UserList: FC<UserListProps> = ({className}) => {
  const users = useAppSelector(getUsers)

  return (
    <div className={classNames(styles.UserList, className)}>
      {users.length && users.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </div>
  );
};
