import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditUsuarioComponent } from './admin-edit-usuario.component';

describe('AdminEditUsuarioComponent', () => {
  let component: AdminEditUsuarioComponent;
  let fixture: ComponentFixture<AdminEditUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
