import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditProtocoloComponent } from './admin-edit-protocolo.component';

describe('AdminEditProtocoloComponent', () => {
  let component: AdminEditProtocoloComponent;
  let fixture: ComponentFixture<AdminEditProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
