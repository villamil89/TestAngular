import { Injectable } from '@angular/core';
import { User } from '../objetos/user';

@Injectable()
export class ComunicacionService {

    user: User;

    constructor() { }

    getUser(): User {
        return this.user;
    }

    setUser(user: User) {
        this.user = user;
    }
}