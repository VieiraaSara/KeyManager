import { Component, OnInit } from '@angular/core';
import { UserregistrationService } from '../../services/userregistration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-usuario',
  standalone: true,
  imports: [],
  templateUrl: './admin-edit-usuario.component.html',
  styleUrl: './admin-edit-usuario.component.css'
})
export class AdminEditUsuarioComponent implements OnInit {
  user: any = {};  
  
  constructor(
    private userService: UserregistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.loadUser(userId);
  }

  //carrega os dados do usuario
  loadUser(userId: number): void {
    this.userService.getUserById(userId)
      .then(user => this.user = user)
      .catch(error => console.error('Error loading user:', error));
  }
//atualiza usaurio
  onSubmit(): void {
    this.userService.editUsers(this.user)
      .then(() => {
        alert('Usuário atualizado com sucesso!');
        this.router.navigate(['/listuser']);
      })
      .catch(error => console.error('Error updating user:', error));
  }
}