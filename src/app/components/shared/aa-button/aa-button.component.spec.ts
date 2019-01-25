import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaButtonComponent } from './aa-button.component';

describe('AaButtonComponent', () => {
  let component: AaButtonComponent;
  let fixture: ComponentFixture<AaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
