import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProtocolService } from '../../services/protocol.service';
import { UserregistrationService } from '../../services/userregistration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-edit-protocolo',
  templateUrl: './admin-edit-protocolo.component.html',
  styleUrls: ['./admin-edit-protocolo.component.css']
})
export class AdminEditProtocoloComponent implements OnInit {
  protocolForm: FormGroup;
  users: any[] = []; 
  ports = [
    { id: 'port1', name: 'Porta 1' },
    { id: 'port2', name: 'Porta 2' },
    { id: 'port3', name: 'Porta 3' },
    { id: 'port4', name: 'Porta 4' }
  ];
  selectedPorts: string[] = [];

  constructor(
    private fb: FormBuilder,
    private protocolService: ProtocolService,
    private userService: UserregistrationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.protocolForm = this.fb.group({
      initialDate: [''],
      initialTime: [''],
      returnTime: [''],
      userBiometric: [''],
      ports: this.fb.array([]) // Cria um FormArray para as portas
    });
  }

  ngOnInit(): void {
    this.loadUsers();
    this.loadProtocolData();
  }

  // Carrega os usuários
  loadUsers(): void {
    this.userService.getUsers()
      .then(users => {
        this.users = users || []; 
      })
      .catch(error => {
        console.error('Erro ao carregar usuários:', error);
      });
  }

  // Carrega todos os dados do protocolo
  loadProtocolData(): void {
    const protocolId = this.route.snapshot.paramMap.get('id');
    if (protocolId) {
      this.protocolService.getProtocolById(protocolId)
        .then(protocol => {
          this.protocolForm.patchValue({
            initialDate: protocol.initialDate,
            initialTime: protocol.initialTime,
            returnTime: protocol.returnTime,
            userBiometric: protocol.userBiometric
          });
          this.selectedPorts = protocol.ports ? protocol.ports.split(',') : []; 
          this.updatePortControls();
        })
        .catch(error => {
          console.error('Erro ao carregar protocolo:', error);
        });
    }
  }

  // Atualiza os controles das portas
  updatePortControls(): void {
    const portsFormArray = this.protocolForm.get('ports') as FormArray;
    this.ports.forEach(port => {
      portsFormArray.push(this.fb.control(this.selectedPorts.includes(port.id)));
    });
  }

  // Manipula a seleção de portas pelo usuário
  onPortChange(portId: string, event: any): void {
    const isChecked = event.target.checked;
    if (isChecked && !this.selectedPorts.includes(portId)) {
      this.selectedPorts.push(portId);
    } else if (!isChecked && this.selectedPorts.includes(portId)) {
      this.selectedPorts = this.selectedPorts.filter(p => p !== portId);
    }
  }

  // Atualiza o protocolo
  onSubmit(): void {
    if (this.protocolForm.valid) {
      const formValue = this.protocolForm.value;
      formValue.ports = this.selectedPorts.join(','); 
      this.protocolService.editProtocol(formValue)
        .then(response => {
          console.log('Protocolo atualizado com sucesso:', response);
          this.router.navigate(['/adminhome']);
        })
        .catch(error => {
          console.error('Erro ao atualizar protocolo:', error);
        });
    } else {
      console.error('O formulário contém erros.');
    }
  }
}
