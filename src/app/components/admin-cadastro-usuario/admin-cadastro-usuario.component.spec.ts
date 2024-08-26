import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastroUsuarioComponent } from './admin-cadastro-usuario.component';

describe('AdminCadastroUsuarioComponent', () => {
  let component: AdminCadastroUsuarioComponent;
  let fixture: ComponentFixture<AdminCadastroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCadastroUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
