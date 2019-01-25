import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaSwitchComponent } from './aa-switch.component';

describe('AaSwitchComponent', () => {
  let component: AaSwitchComponent;
  let fixture: ComponentFixture<AaSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
