import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsofuserComponent } from './detailsofuser.component';

describe('DetailsofuserComponent', () => {
  let component: DetailsofuserComponent;
  let fixture: ComponentFixture<DetailsofuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsofuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsofuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
