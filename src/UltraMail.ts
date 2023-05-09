import axios from 'axios'
import { z } from 'zod'
import { AddUserActionArgs, CreateUserArgs, DeleteUserArgs } from './types'

export default class UltraMail {
    private key: string

    constructor(key: string) {
        this.key = key
    }

    public createUser = z.function()
        .args(CreateUserArgs)
        .returns(z.promise(z.void()))
        .implement(i => console.log(i))

    public addUserAction = z.function()
        .args(AddUserActionArgs)
        .returns(z.promise(z.void()))
        .implement(i => console.log(i))

    public deleteUser = z.function()
        .args(DeleteUserArgs)
        .returns(z.promise(z.void()))
        .implement(i => console.log(i))
}