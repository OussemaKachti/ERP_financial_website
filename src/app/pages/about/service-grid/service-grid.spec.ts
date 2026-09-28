import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGrid } from './service-grid';

describe('ServiceGrid', () => {
  let component: ServiceGrid;
  let fixture: ComponentFixture<ServiceGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
