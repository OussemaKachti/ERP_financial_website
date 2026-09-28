import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCaseStudy1 } from './portfolio-case-study1';

describe('PortfolioCaseStudy1', () => {
  let component: PortfolioCaseStudy1;
  let fixture: ComponentFixture<PortfolioCaseStudy1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioCaseStudy1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioCaseStudy1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
