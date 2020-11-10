import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private _activedRoute: ActivatedRoute
  ) {
    this._activedRoute.params.subscribe(data => {
      this.items = [
        {
          label: 'Home',
          items: [
            { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: 'inicio' }
          ]
        },
        {
          label: 'Contenido principal',
          items: [
            { label: 'Contenido uno', icon: 'pi pi-fw pi-plus', routerLink: 'contenidoPrincipal/contenidoUno/' + data['id'] },
            { label: 'Contenido dos', icon: 'pi pi-fw pi-plus', routerLink: 'contenidoPrincipal/contenidoDos' },
          ]
        },
        {
          label: 'Contenido secundario',
          items: [
            { label: 'Contenido secundario', icon: 'pi pi-fw pi-plus', routerLink: 'contenidoSecundario' }
          ]
        }
      ]
    });
  }

  ngOnInit() {
  }

}
