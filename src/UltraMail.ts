import axios from 'axios'
import { z } from 'zod'
import { AddUserActionArgs, CreateUserArgs, DeleteUserArgs, CreateUser, DeleteUser, AddUserAction } from './types'

export default class UltraMail {
    private key: string

    constructor(key: string) {
        this.key = key
    }

    public createUser = z.function()
        .args(CreateUserArgs)
        .returns(z.promise(z.void()))
        .implement(async ({ email, name, age }: CreateUser) => {
            const res = await axios.post(`${process.env.ORIGIN}/api/auto/user`, { email, name, age }, { headers: { "Authorization": this.key } })
            console.log(`${res.status}: ${res.data}`)
        })

    public addUserAction = z.function()
        .args(AddUserActionArgs)
        .returns(z.promise(z.void()))
        .implement(async ({ userEmail, action }: AddUserAction) => {
            const res = await axios.post(`${process.env.ORIGIN}/api/auto/addUserAction`, { userEmail, action }, { headers: { "Authorization": this.key } })
            console.log(`${res.status}: ${res.data}`)
        })

    public deleteUser = z.function()
        .args(DeleteUserArgs)
        .returns(z.promise(z.void()))
        .implement(async ({ user }: DeleteUser) => {
            const res = await axios.delete(`${process.env.ORIGIN}/api/auto/user`, { params: { user }, headers: { "Authorization": this.key } })
            console.log(`${res.status}: ${res.data}`)
        })

    // testing functions

    public testUsers = z.function()
        .returns(z.promise(z.boolean()))
        .implement(async () => {
            const res = await axios.get(`${process.env.ORIGIN}/api/auto/user`)
            return res.status===200
        })

    public testAdd = z.function()
        .returns(z.promise(z.boolean()))
        .implement(async () => {
            const res = await axios.get(`${process.env.ORIGIN}/api/auto/addUserAction`)
            return res.status===200
        })
}