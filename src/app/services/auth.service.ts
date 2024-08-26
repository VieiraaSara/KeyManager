import { Injectable } from '@angular/core';
import { Observable, interval, Subscription, from, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activateLoginUrl = 'http://native-randomly-swift.ngrok-free.app/auth/verifyLogin';
  private checkLoginUrl = 'http://native-randomly-swift.ngrok-free.app/login';
  private loginCheckSubscription!: Subscription;

  constructor(private router: Router) {}

  private fetchRequest(url: string, options: RequestInit): Observable<any> {
    return from(
      fetch(url, options).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  activateLoginMode(): Observable<any> {
    return this.fetchRequest(this.activateLoginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
  }

  verifyBiometricLogin(): Observable<{ token: string, userRole: number }> {
    return this.fetchRequest(this.checkLoginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
  }

  startLoginVerification(): void {
    this.loginCheckSubscription = interval(1000).pipe(
      switchMap(() => this.verifyBiometricLogin()),
      catchError(error => {
        console.error('Login falhou:', error);
        return throwError(() => new Error('Login falhou'));
      })
    ).subscribe(response => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        if (response.userRole === 1) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
        this.stopLoginVerification();
      }
    });
  }

  stopLoginVerification(): void {
    if (this.loginCheckSubscription) {
      this.loginCheckSubscription.unsubscribe();
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('erro '));
  }
}
