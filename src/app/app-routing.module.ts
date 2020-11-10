import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { ContenidoSecundarioComponent } from './contenido-secundario/contenido-secundario.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoUnoComponent } from './contenido-principal/contenido-uno/contenido-uno.component';
import { ContenidoDosComponent } from './contenido-principal/contenido-dos/contenido-dos.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent, data: { miga: 'Inicio' } },
  {
    path: 'contenidoPrincipal',
    component: ContenidoPrincipalComponent,
    data: { miga: 'Contenido Principal' },
    children: [
      { path: 'contenidoUno/:id', component: ContenidoUnoComponent, data: { miga: 'Contenido Uno' } },
      { path: 'contenidoDos', component: ContenidoDosComponent, data: { miga: 'Contenido Dos' } }
    ]
  },
  {
    path: 'contenidoSecundario',
    component: ContenidoSecundarioComponent,
    data: { miga: 'Contenido Secundario' }
  },
  {
    path: 'usuario', 
    component: UserComponent, 
    data: { miga: 'Usuario' }
  },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
