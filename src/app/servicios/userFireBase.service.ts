import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../objetos/user';

@Injectable()
export class UserFireBaseService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    public allUsers() {
        return this.firestore.collection('Usuarios').snapshotChanges();
    }

    public createUser(user: User) {
        return this.firestore.collection('Usuarios').add(user);
    }

    public deleteUser(id: string) {
        return this.firestore.collection('Usuarios').doc(id).delete();
    }

    public userById(id: string) {
        return this.firestore.collection('Usuarios').doc(id).get();
    }
}