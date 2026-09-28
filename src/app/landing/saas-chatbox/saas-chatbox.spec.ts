import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasChatbox } from './saas-chatbox';

describe('SaasChatbox', () => {
  let component: SaasChatbox;
  let fixture: ComponentFixture<SaasChatbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasChatbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasChatbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
