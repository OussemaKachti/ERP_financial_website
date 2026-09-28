import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedBlog } from './related-blog';

describe('RelatedBlog', () => {
  let component: RelatedBlog;
  let fixture: ComponentFixture<RelatedBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
