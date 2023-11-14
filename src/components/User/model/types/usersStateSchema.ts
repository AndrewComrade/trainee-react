import {User} from "@/components/User/model/types/user";

export interface UsersStateSchema {
  users: User[]
  currentUser: User | null
}