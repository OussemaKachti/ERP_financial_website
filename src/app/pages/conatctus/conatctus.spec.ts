import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conatctus } from './conatctus';

describe('Conatctus', () => {
  let component: Conatctus;
  let fixture: ComponentFixture<Conatctus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conatctus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conatctus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
