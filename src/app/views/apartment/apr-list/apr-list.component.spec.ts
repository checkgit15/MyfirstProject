import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprListComponent } from './apr-list.component';

describe('AprListComponent', () => {
  let component: AprListComponent;
  let fixture: ComponentFixture<AprListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
