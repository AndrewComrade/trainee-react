import React, {FC} from 'react';
import styles from './HomePage.module.scss';
import {Container} from "@/layout";
import {useAppDispatch, useAppSelector} from "@/store";
import {usersActions, IUser} from "@/store/reducers/userSlice/userSlice";
import { v4 as uuidv4 } from 'uuid';

interface HomePageProps {
}

export const HomePage: FC<HomePageProps> = () => {

  const dispatch = useAppDispatch()
  const { users, currentUser } = useAppSelector((state) => state.usersReducer)

  // console.log(users)

  const handleAddUser = () => {
    const newUser: IUser = {
      id: uuidv4(),
      name: 'Mihail',
      age: 20,
      isActive: false,
      counter: 0,
    }

    dispatch(usersActions.addUser(newUser))
  }

  return (
    <div className={styles.HomePage}>
      <Container>
        <button onClick={handleAddUser}>
          Add user
        </button>

        <div className={styles.usersList}>
          {users.length && users.map((user) => (
            <div className={styles.User}>
              <span>ID: {user.id}</span>
              <span>Name: {user.name}</span>
              <span>Age: {user.age}</span>
              <span>Is active: {user.isActive}</span>
              <span>Counter: {user.counter}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
