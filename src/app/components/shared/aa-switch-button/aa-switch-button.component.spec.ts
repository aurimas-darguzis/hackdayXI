import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSwitchButtonComponent } from './aa-switch-button.component';

describe('AaSwitchButtonComponent', () => {
  let component: AaSwitchButtonComponent;
  let fixture: ComponentFixture<AaSwitchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaSwitchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaSwitchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
