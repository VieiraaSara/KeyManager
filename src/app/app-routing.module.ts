import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AvailableportsComponent } from './components/availableports/availableports.component';
import { AutenticatorComponent } from './components/autenticator/autenticator.component';
import { AdminAbtProtocoloComponent } from './components/admin-abt-protocolo/admin-abt-protocolo.component';
import { AdminCadastroUsuarioComponent } from './components/admin-cadastro-usuario/admin-cadastro-usuario.component';
import { AdminEditProtocoloComponent } from './components/admin-edit-protocolo/admin-edit-protocolo.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminListaUsuarioComponent } from './components/admin-lista-usuario/admin-lista-usuario.component';
import { AdminEditUsuarioComponent } from './components/admin-edit-usuario/admin-edit-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'availableports', component: AvailableportsComponent },
  { path: 'autenticator', component: AutenticatorComponent },
  { path: 'openingprotocol', component: AdminAbtProtocoloComponent },
  { path: 'userregistration', component: AdminCadastroUsuarioComponent },
  { path: 'editprotocol', component: AdminEditProtocoloComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'listuser', component: AdminListaUsuarioComponent },
  { path: 'edituser', component: AdminEditUsuarioComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
