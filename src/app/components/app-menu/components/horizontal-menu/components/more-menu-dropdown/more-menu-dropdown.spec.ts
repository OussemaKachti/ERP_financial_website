import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MoreMenuDropdown } from './more-menu-dropdown'

describe('MoreMenuDropdown', () => {
  let component: MoreMenuDropdown
  let fixture: ComponentFixture<MoreMenuDropdown>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreMenuDropdown],
    }).compileComponents()

    fixture = TestBed.createComponent(MoreMenuDropdown)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
