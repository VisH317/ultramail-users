import { z } from "zod";

export const CreateUserArgs = z.object({
    email: z.string(),
    name: z.string(),
    age: z.number()
})

export const AddUserActionArgs = z.object({
    userEmail: z.string(),
    action: z.string()
})

export const DeleteUserArgs = z.object({
    user: z.string()
})

export interface CreateUser {
    email: string
    name: string
    age: number
}

export interface AddUserAction {
    userEmail: string
    action: string
}

export interface DeleteUser {
    user: string
}