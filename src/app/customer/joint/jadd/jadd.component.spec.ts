import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaddComponent } from './jadd.component';

describe('JaddComponent', () => {
  let component: JaddComponent;
  let fixture: ComponentFixture<JaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
