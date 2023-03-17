import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payment2021Component } from './payment2021.component';

describe('Payment2021Component', () => {
  let component: Payment2021Component;
  let fixture: ComponentFixture<Payment2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Payment2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Payment2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
