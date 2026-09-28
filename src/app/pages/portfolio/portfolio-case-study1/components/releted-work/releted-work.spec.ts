import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReletedWork } from './releted-work';

describe('ReletedWork', () => {
  let component: ReletedWork;
  let fixture: ComponentFixture<ReletedWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReletedWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReletedWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
