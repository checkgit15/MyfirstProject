import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflatComponent } from './addflat.component';

describe('AddflatComponent', () => {
  let component: AddflatComponent;
  let fixture: ComponentFixture<AddflatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddflatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
