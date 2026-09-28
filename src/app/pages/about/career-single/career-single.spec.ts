import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSingle } from './career-single';

describe('CareerSingle', () => {
  let component: CareerSingle;
  let fixture: ComponentFixture<CareerSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
