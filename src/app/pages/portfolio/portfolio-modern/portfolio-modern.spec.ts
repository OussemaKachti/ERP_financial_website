import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModern } from './portfolio-modern';

describe('PortfolioModern', () => {
  let component: PortfolioModern;
  let fixture: ComponentFixture<PortfolioModern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
