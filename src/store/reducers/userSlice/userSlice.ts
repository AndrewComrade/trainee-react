import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export interface IUser {
  id: number | string;
  name: string;
  age: number;
  isActive: boolean;
  counter: number;
}

interface UserState {
  users: IUser[]
  currentUser: IUser | null
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      age: 10,
      name: 'Ivan',
      isActive: false,
      counter: 0,
    },
    {
      id: 2,
      age: 12,
      name: 'Alex',
      isActive: true,
      counter: 0,
    }
  ],
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload)
    },
    editUser(state, action: PayloadAction<IUser>) {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload
        }
        return user
      })
    },
    incrementUserCounter(state, action: PayloadAction<number | string>) {
      const searchableUser = state.users.find(user => user.id === action.payload)
      !!searchableUser && searchableUser.counter++
    },
    decrementUserCounter(state, action: PayloadAction<number | string>) {
      const searchableUser = state.users.find(user => user.id === action.payload)
      !!searchableUser && searchableUser.counter--
    }
  }
})

export const {actions: usersActions, reducer: usersReducer} = userSlice