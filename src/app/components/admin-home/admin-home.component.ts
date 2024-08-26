
import { Component, OnInit } from '@angular/core';
import { ProtocolService } from '../../services/protocol.service';
import { Router } from '@angular/router';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [AdminNavbarComponent,
    CommonModule
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit {
  protocolos: any[] = []; 

  constructor(
    private protocolService: ProtocolService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProtocols();
  }

  loadProtocols(): void {
    this.protocolService.getProtocols() 
      .then(protocolos => {
        this.protocolos = protocolos || []; 
      })
      .catch(error => {
        console.error('Erro ao carregar protocolos:', error);
      });
  }

  editProtocolo(protocolID: number): void { //quando clicado no botão edita o protocolo referente ao id
    this.router.navigate([`/editprotocol/${protocolID}`]);
  }

  deleteProtocolo(protocolID: number): void { // deleta o protocolo quando clicado no botão
    if (confirm('Tem certeza que deseja excluir este protocolo?')) {
      this.protocolService.deleteProtocol(protocolID)
        .then(() => {
          this.loadProtocols(); 
        })
        .catch(error => {
          console.error('Erro ao excluir protocolo:', error);
        });
    }
  }
}