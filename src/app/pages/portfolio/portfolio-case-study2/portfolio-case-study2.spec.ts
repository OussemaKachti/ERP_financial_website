import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCaseStudy2 } from './portfolio-case-study2';

describe('PortfolioCaseStudy2', () => {
  let component: PortfolioCaseStudy2;
  let fixture: ComponentFixture<PortfolioCaseStudy2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCaseStudy2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCaseStudy2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
