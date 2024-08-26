import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAbtProtocoloComponent } from './admin-abt-protocolo.component';

describe('AdminAbtProtocoloComponent', () => {
  let component: AdminAbtProtocoloComponent;
  let fixture: ComponentFixture<AdminAbtProtocoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAbtProtocoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAbtProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
