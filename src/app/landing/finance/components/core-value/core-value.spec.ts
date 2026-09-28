import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreValue } from './core-value';

describe('CoreValue', () => {
  let component: CoreValue;
  let fixture: ComponentFixture<CoreValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
