import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProtocolService {
  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }


  //criar protocolo
  createProtocol(protocol: any) {
    return this.http.post(`${this.apiUrl}/admin/createProtocol`, protocol)
    .pipe(
     catchError(this.handleError)
    )
    .toPromise();
  }

  //editar protocolo
  editProtocol(protocol: any): Promise<any> {
    return this.http.post<any>(`${this.apiUrl}/admin/dataManager/updateProtocolData`, protocol)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  
//pegar todos os protocolos
  getProtocols() {
    return this.http.get<any[]>(`${this.apiUrl}/admin/dataManager/getAllProtocols`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }

  //deletar protocolo
  deleteProtocol(protocolId: number) {
    return this.http.delete(`${this.apiUrl}/admin/dataManager/deleteProtocol/${protocolId}`)
      .pipe(
        catchError(this.handleError)
      )
      .toPromise();
  }
//pegar protocolos referente ao id deles
getProtocolById(protocolId: string) {
    return this.http.get<any>(`${this.apiUrl}/admin/dataManager/getProtocolById/${protocolId}`)
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
