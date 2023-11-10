import {combineReducers} from "@reduxjs/toolkit";
import {usersReducer} from "@/store/reducers/userSlice/userSlice";

export const rootReducer = combineReducers({
    usersReducer
})