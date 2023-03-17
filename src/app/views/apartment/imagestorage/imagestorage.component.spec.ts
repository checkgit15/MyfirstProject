import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagestorageComponent } from './imagestorage.component';

describe('ImagestorageComponent', () => {
  let component: ImagestorageComponent;
  let fixture: ComponentFixture<ImagestorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagestorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagestorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
