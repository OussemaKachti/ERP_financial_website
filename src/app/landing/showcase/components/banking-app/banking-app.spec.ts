import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingApp } from './banking-app';

describe('BankingApp', () => {
  let component: BankingApp;
  let fixture: ComponentFixture<BankingApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
