import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFeature } from './tab-feature';

describe('TabFeature', () => {
  let component: TabFeature;
  let fixture: ComponentFixture<TabFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
