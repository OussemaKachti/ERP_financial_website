import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PagesMenuDropdown } from './pages-menu-dropdown'

describe('PagesMenuDropdown', () => {
  let component: PagesMenuDropdown
  let fixture: ComponentFixture<PagesMenuDropdown>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesMenuDropdown],
    }).compileComponents()

    fixture = TestBed.createComponent(PagesMenuDropdown)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
