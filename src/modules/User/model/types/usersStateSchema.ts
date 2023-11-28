import {User} from "@/modules/User/model/types/user";

export interface UsersStateSchema {
  users: User[]
  currentUser: User | null
}