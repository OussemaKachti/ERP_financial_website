import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOfficeDetail } from './map-office-detail';

describe('MapOfficeDetail', () => {
  let component: MapOfficeDetail;
  let fixture: ComponentFixture<MapOfficeDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapOfficeDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOfficeDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
