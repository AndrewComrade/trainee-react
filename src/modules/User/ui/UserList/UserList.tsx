import React, {FC, memo} from 'react';
import styles from './UserList.module.scss';
import classNames from "classnames";
import {useAppSelector} from "@/store";
import {getUsers} from "@/modules/User/model/selectors/getUsers";
import {UserListItem} from "@/modules/User/ui/UserListItem/UserListItem";

interface UserListProps {
  className?: string;
}

export const UserList: FC<UserListProps> = memo(({className}) => {
  const users = useAppSelector(getUsers)

  const onRemoveUser = (id: number | string) => {

  }

  return (
    <div className={classNames(styles.UserList, className)}>
      {users.length && users.map(user => (
        <UserListItem key={user.id} user={user}/>
      ))}
    </div>
  );
});
