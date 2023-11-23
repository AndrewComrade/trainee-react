import React, {FC} from 'react';
import styles from './UserListItem.module.scss';
import {User} from "@/components/User/model/types/user";
import {Card} from "antd";

interface UserListItemProps {
  className?: string;
  user: User;
}

export const UserListItem: FC<UserListItemProps> = ({user}) => {
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
};
