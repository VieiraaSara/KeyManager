import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autenticator',
  templateUrl: './autenticator.component.html',
  styleUrls: ['./autenticator.component.css']
})
export class AutenticatorComponent implements OnInit {
  authToken: string | null = null;
  extraValue: string | null = null;
  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  autenticar(): void {
    debugger
    this.isLoading = true;

    this.authService.verifyBiometricLogin().subscribe({
      next: (response) => {
        const { token, userRole } = response;
        const [authToken, extraValue] = token.split(',');

        this.authToken = authToken;
        this.extraValue = extraValue;

        console.log('Token:', this.authToken);
        console.log('Extra Value:', this.extraValue);

    
        if (userRole === 1) {
          this.router.navigate(['/adminhome']);
        } else {
          this.router.navigate(['/availableports']);
        }
      },
      error: (error) => {
        this.errorMessage = 'Erro de autenticação. Tente novamente.';
        console.error('Erro ao autenticar:', error);
      },
      complete: () => {
        this.isLoading = false;   
      }
    });
  }
}
