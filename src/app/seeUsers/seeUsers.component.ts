import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { USUARIOS } from '../objetos/mock/mockUsuarios';
import { User } from '../objetos/user';

@Component({
  selector: 'app-seeUsers',
  templateUrl: './seeUsers.component.html',
  styleUrls: ['./seeUsers.component.css']
})
export class SeeUsersComponent implements OnInit {

  usuarios: User[] = new Array<User>();
  @Output() sendUser = new EventEmitter<User>();

  constructor(
  ) {
    this.usuarios = USUARIOS;
  }

  ngOnInit() {
  }

  deleteUser(user: User) {
  }

  seeUser(user: User) {
    this.sendUser.emit(user);
  }

}
