import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { User } from '../objetos/user';

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  user(id: number): Observable<any> {
    const endPoint = environment.users_endPoint + 'users/' + id;
    return this._http.get(endPoint);
  }

  users(): Observable<any> {
    const endPoint = environment.users_endPoint + 'users/';
    return this._http.get(endPoint);
  }

  addUser(user: User): Observable<any> {
    const endPoint = environment.users_endPoint + 'users/';
    return this._http.post(endPoint, user);
  }

  updateUser(user: User, id: number): Observable<any> {
    const endPoint = environment.users_endPoint + 'users/' + id;
    return this._http.put(endPoint, user);
  }

  delete(id: number): Observable<any> {
    const endPoint = environment.users_endPoint + 'users/' + id;
    return this._http.delete(endPoint);
  }
}
