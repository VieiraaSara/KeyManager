import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableportsComponent } from './availableports.component';

describe('AvailableportsComponent', () => {
  let component: AvailableportsComponent;
  let fixture: ComponentFixture<AvailableportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
