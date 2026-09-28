import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs2 } from './contact-us2';

describe('ContactUs2', () => {
  let component: ContactUs2;
  let fixture: ComponentFixture<ContactUs2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUs2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUs2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
