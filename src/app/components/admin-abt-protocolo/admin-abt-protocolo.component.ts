import { Component, OnInit } from '@angular/core';
import { ProtocolService } from '../../services/protocol.service';
import { UserregistrationService } from '../../services/userregistration.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-admin-abt-protocolo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-abt-protocolo.component.html',
  styleUrl: './admin-abt-protocolo.component.css'
})
export class AdminAbtProtocoloComponent implements OnInit {
  selectedPorts: string[] = [];
  protocolData = {
    data: '',
    initialTime: '',
    finalTime: '',
    usuario: '',
    ports: ''
  };
  users: any[] = []; 

  constructor(
    private protocolService: ProtocolService,
    private userService: UserregistrationService 
  ) {}

  ngOnInit() {
    this.loadUsers(); 
  }

  async loadUsers() { //pega todos os usuarios
    try {
      const usersResponse = await this.userService.getUsers();
      this.users = usersResponse || []; 
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  }

  //pega os dados q o usuario colocou e envia para a variavel port
  onPortChange(event: any) {
    const port = event.target.value;
    if (event.target.checked) {
      this.selectedPorts.push(port);
    } else {
      this.selectedPorts = this.selectedPorts.filter(p => p !== port);
    }
  }

  //cadastra o protocolo
  onSubmit() {
    this.protocolData.ports = this.selectedPorts.join(',');
    console.log('Dados do Protocolo:', this.protocolData);
    
    this.protocolService.createProtocol(this.protocolData)
      .then(response => {
        console.log('Protocolo criado com sucesso:', response);
      })
      .catch(error => {
        console.error('Erro ao criar o protocolo:', error);
      });
  }
}