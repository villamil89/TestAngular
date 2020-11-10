import { Component, OnInit } from '@angular/core';
import { User } from '../objetos/user';
import { UserService } from '../servicios/user.service';
import { UserFireBaseService } from '../servicios/userFireBase.service';
import { ComunicacionService } from '../servicios/comunicacion.service';
import { USUARIOS } from '../objetos/mock/mockUsuarios';

@Component({
  selector: 'app-contenido-secundario',
  templateUrl: './contenido-secundario.component.html',
  styleUrls: ['./contenido-secundario.component.css']
})
export class ContenidoSecundarioComponent implements OnInit {

  usuario: User;

  constructor(
  ) { }

  ngOnInit() {
  }

  deleteUser(user: User) {
  }

  seeUser(user: User) {
    this.usuario = user;
  }

}