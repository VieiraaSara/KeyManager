import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  //cadastrar usuario
  registration(user: any) {
    return this.http.post(`${this.apiUrl}admin/registerNewUser`, user)
    .pipe(
      catchError(this.handleError)
    )
    .toPromise();
  }
//pegar todos os usuarios
  getUsers() {
    return this.http.get<any[]>(`${this.apiUrl}/admin/dataManager/getAllUsers`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  //editar usuarios
  editUsers(user: any): Promise<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/dataManager/updateUserData`, user)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  //deletar usuarios
  deleteUsers(userId: number) {
    return this.http.delete(`${this.apiUrl}/admin/dataManager/deleteUser/${userId}`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  //pegar usuarios referente ao id
  getUserById(userId: number): Promise<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/dataManager/getUserById/${userId}`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  private handleError(error: any){
    console.log('erro no serviço:', error)
    return throwError(error)
  }
}
