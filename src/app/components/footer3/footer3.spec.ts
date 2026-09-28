import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer3 } from './footer3';

describe('Footer3', () => {
  let component: Footer3;
  let fixture: ComponentFixture<Footer3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
