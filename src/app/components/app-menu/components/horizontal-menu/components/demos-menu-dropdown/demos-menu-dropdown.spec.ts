import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DemosMenuDropdown } from './demos-menu-dropdown'

describe('DemosMenuDropdown', () => {
  let component: DemosMenuDropdown
  let fixture: ComponentFixture<DemosMenuDropdown>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemosMenuDropdown],
    }).compileComponents()

    fixture = TestBed.createComponent(DemosMenuDropdown)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
