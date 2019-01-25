import { Component, Input, Self, Optional, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-aa-switch',
  templateUrl: './aa-switch.component.html',
  styleUrls: ['./aa-switch.component.sass']
})
export class AaSwitchComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() id: string;
  @ViewChild('checkbox') checkbox: ElementRef;
  onChange: any;

  handleChange (value: boolean) {
    this.onChange(!value);
  }

  constructor(
    @Optional() @Self() public controlDir: NgControl,
    ) {
    if (controlDir ) {
       controlDir.valueAccessor = this;
    }
  }

  public writeValue(isOn: boolean): void {
    this.checkbox.nativeElement.checked = isOn;
  }

  public registerOnChange(fn: boolean) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {}
}
