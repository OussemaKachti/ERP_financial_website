import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContent } from './list-content';

describe('ListContent', () => {
  let component: ListContent;
  let fixture: ComponentFixture<ListContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
