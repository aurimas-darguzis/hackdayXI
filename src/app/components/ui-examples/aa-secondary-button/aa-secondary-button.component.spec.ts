import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSecondaryButtonComponent } from './aa-secondary-button.component';

describe('AaSecondaryButtonComponent', () => {
  let component: AaSecondaryButtonComponent;
  let fixture: ComponentFixture<AaSecondaryButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaSecondaryButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaSecondaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
