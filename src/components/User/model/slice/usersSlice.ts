import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "@/components/User/model/types/user";
import {UsersStateSchema} from "@/components/User/model/types/usersStateSchema";

const initialState: UsersStateSchema = {
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
    },
    {
      id: 3,
      age: 31,
      name: 'Anna',
      isActive: true,
      counter: 0,
    },
    {
      id: 4,
      age: 22,
      name: 'Kate',
      isActive: true,
      counter: 0,
    }
  ],
  currentUser: null
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload)
    },
    editUser(state, action: PayloadAction<User>) {
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

export const {actions: usersActions} = usersSlice

export const {reducer: usersReducer} = usersSlice