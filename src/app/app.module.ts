import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoDosComponent } from './contenido-principal/contenido-dos/contenido-dos.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { ContenidoUnoComponent } from './contenido-principal/contenido-uno/contenido-uno.component';
import { ContenidoSecundarioComponent } from './contenido-secundario/contenido-secundario.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ProductService } from './servicios/product.service';
import { UserService } from './servicios/user.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserFireBaseService } from './servicios/userFireBase.service';
import { ComunicacionService } from './servicios/comunicacion.service';
import { SeeUsersComponent } from './seeUsers/seeUsers.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ContenidoPrincipalComponent,
    ContenidoSecundarioComponent,
    MenuComponent,
    ContenidoUnoComponent,
    ContenidoDosComponent,
    UserComponent,
    SeeUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    MenuModule,
    BreadcrumbModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    ProductService,
    UserService,
    UserFireBaseService,
    ComunicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
