import { User } from "./user.model"

export interface Message {
    uuId:string
    content:string
    createdAt:Date
    user:User
}