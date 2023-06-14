import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDeatailFormComponent } from './payment-deatail-form.component';

describe('PaymentDeatailFormComponent', () => {
  let component: PaymentDeatailFormComponent;
  let fixture: ComponentFixture<PaymentDeatailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDeatailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDeatailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
