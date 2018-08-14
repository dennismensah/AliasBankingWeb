import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentmanagerComponent } from './investmentmanager.component';

describe('InvestmentmanagerComponent', () => {
  let component: InvestmentmanagerComponent;
  let fixture: ComponentFixture<InvestmentmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
