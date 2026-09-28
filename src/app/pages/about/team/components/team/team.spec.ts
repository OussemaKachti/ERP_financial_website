import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teams } from './team';

describe('Teams', () => {
  let component: Teams;
  let fixture: ComponentFixture<Teams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
