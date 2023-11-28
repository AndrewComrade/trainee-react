import {RootState} from "@/store";

export const getUsers = (state: RootState) => state.usersReducer.users

export const getCurrentUser = (state: RootState) => state.usersReducer.currentUser