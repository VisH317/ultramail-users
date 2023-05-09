import axios from 'axios'
import { z } from 'zod'

export default class UltraMail {
    private key: string

    constructor(key: string) {
        this.key = key
    }

    public async createUser(): Promise<void> {

    }

    public async addUserAction(): Promise<void> {

    }

    public async deleteUser(): Promise<void> {

    }
}