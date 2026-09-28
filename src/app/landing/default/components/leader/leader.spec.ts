import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leader } from './leader';

describe('Leader', () => {
  let component: Leader;
  let fixture: ComponentFixture<Leader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
