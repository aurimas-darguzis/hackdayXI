import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aa-secondary-button',
  templateUrl: './aa-secondary-button.component.html',
  styleUrls: ['./aa-secondary-button.component.sass']
})
export class AaSecondaryButtonComponent {

  @Input() label: string;
  @Input() type: string;
  @Input() icon: string;
  @Input() size: string;
  @Input() disabled: boolean;
  @Output() modelChanged = new EventEmitter();

  notifyParent() {
    this.modelChanged.emit();
  }
}
