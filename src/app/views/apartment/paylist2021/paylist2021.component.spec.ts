import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paylist2021Component } from './paylist2021.component';

describe('Paylist2021Component', () => {
  let component: Paylist2021Component;
  let fixture: ComponentFixture<Paylist2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paylist2021Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paylist2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
