import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeGallary } from './office-gallary';

describe('OfficeGallary', () => {
  let component: OfficeGallary;
  let fixture: ComponentFixture<OfficeGallary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeGallary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeGallary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
