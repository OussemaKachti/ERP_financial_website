import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeature2 } from './product-feature2';

describe('ProductFeature2', () => {
  let component: ProductFeature2;
  let fixture: ComponentFixture<ProductFeature2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFeature2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeature2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
