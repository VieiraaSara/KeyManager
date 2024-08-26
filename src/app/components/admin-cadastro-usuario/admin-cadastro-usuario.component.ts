import { Component } from '@angular/core';
import { UserregistrationService } from '../../services/userregistration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-cadastro-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-cadastro-usuario.component.html',
  styleUrls: ['./admin-cadastro-usuario.component.css'] 
})
export class AdminCadastroUsuarioComponent {
  userForm: FormGroup;

  constructor(
    private userregistrationService: UserregistrationService,
    private formBuilder: FormBuilder
  ) {
    // Inicializa o formulário com validações
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required],
      userRole: ['', Validators.required]
    });
  }

  // Método chamado ao submeter o formulário
  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      // Cadastra o usuário utilizando o serviço
      this.userregistrationService.registration(userData)
        .then(() => {
          console.log('Usuário cadastrado com sucesso');
          // Aqui você pode adicionar qualquer ação adicional após o cadastro, como redirecionar o usuário
        })
        .catch(error => {
          console.error('Erro ao cadastrar usuário:', error);
        });
    } else {
      console.error('Formulário inválido');
    }
  }
}
