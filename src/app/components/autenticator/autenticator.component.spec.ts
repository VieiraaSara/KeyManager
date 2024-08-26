import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticatorComponent } from './autenticator.component';

describe('AutenticatorComponent', () => {
  let component: AutenticatorComponent;
  let fixture: ComponentFixture<AutenticatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutenticatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutenticatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
