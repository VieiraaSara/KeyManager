import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AvailableportsComponent } from './components/availableports/availableports.component';
import { AutenticatorComponent } from './components/autenticator/autenticator.component';
import { AdminListaUsuarioComponent } from './components/admin-lista-usuario/admin-lista-usuario.component';
import { AdminAbtProtocoloComponent } from './components/admin-abt-protocolo/admin-abt-protocolo.component';
import { AdminCadastroUsuarioComponent } from './components/admin-cadastro-usuario/admin-cadastro-usuario.component';
import { AdminEditProtocoloComponent } from './components/admin-edit-protocolo/admin-edit-protocolo.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminEditUsuarioComponent } from './components/admin-edit-usuario/admin-edit-usuario.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    AvailableportsComponent,
    AutenticatorComponent,
    AdminListaUsuarioComponent,
    AdminAbtProtocoloComponent,
    AdminCadastroUsuarioComponent,
    AdminEditProtocoloComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminEditUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
