import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsequenceComponent } from './commonsequence.component';

describe('CommonsequenceComponent', () => {
  let component: CommonsequenceComponent;
  let fixture: ComponentFixture<CommonsequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
