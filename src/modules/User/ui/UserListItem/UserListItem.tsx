import React, {FC, memo} from 'react';
import styles from './UserListItem.module.scss';
import {User} from "@/modules/User/model/types/user";
import {Card} from "antd";

interface UserListItemProps {
  className?: string;
  user: User;
}

export const UserListItem: FC<UserListItemProps> = memo(({user}) => {
  const {name, age, counter, isActive} = user

  return (
    <Card
      title={<h3 className={styles.title}>{name}</h3>}
      className={styles.UserListItem}
      extra={<div className={styles.age}>{age}</div>}
    >
      <div className={styles.content}>
        <span>Age: {age}</span>
        <span>Is active: {isActive.toString()}</span>
        <span>Counter: {counter}</span>
      </div>
    </Card>
  );
});
