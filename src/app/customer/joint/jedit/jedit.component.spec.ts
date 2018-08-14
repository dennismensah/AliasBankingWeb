import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeditComponent } from './jedit.component';

describe('JeditComponent', () => {
  let component: JeditComponent;
  let fixture: ComponentFixture<JeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
