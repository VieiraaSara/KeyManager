import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { UserregistrationService } from '../../services/userregistration.service';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-lista-usuario',
  templateUrl: './admin-lista-usuario.component.html',
  styleUrls: ['./admin-lista-usuario.component.css']
})
export class AdminListaUsuarioComponent implements OnInit  {
  usuarios: any[] = [];  // Usando "usuarios" consistentemente

  constructor(
    private userService: UserregistrationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Carrega os usuários cadastrados
  loadUsers(): void {
    this.userService.getUsers()
      .then(users => {
        this.usuarios = Array.isArray(users) ? users : [];  // Usando "usuarios" aqui
      })
      .catch(error => console.error('Error loading users:', error));
  }

  // Vai para a página de editar usuário quando clicar no botão
  editUser(user: any): void {
    this.router.navigate(['/admin/edituser', user.id]);
  }

  // Deleta o usuário com o id
  deleteUser(userId: number): void {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.userService.deleteUsers(userId)
        .then(() => {
          this.usuarios = this.usuarios.filter(user => user.id !== userId);  // Usando "usuarios" aqui
          console.log('Usuário deletado com sucesso');
        })
        .catch(error => console.error('Erro ao deletar o usuário:', error));
    }
  }
}
