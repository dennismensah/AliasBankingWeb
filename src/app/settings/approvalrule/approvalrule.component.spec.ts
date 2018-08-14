import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalruleComponent } from './approvalrule.component';

describe('ApprovalruleComponent', () => {
  let component: ApprovalruleComponent;
  let fixture: ComponentFixture<ApprovalruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
