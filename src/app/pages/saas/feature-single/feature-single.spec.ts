import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSingle } from './feature-single';

describe('FeatureSingle', () => {
  let component: FeatureSingle;
  let fixture: ComponentFixture<FeatureSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
