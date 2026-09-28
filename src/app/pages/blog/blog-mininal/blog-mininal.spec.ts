import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMininal } from './blog-mininal';

describe('BlogMininal', () => {
  let component: BlogMininal;
  let fixture: ComponentFixture<BlogMininal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMininal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMininal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
