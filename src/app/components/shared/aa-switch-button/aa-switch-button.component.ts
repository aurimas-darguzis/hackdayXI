import { uiSwitchButton } from './../../../constants/codeSnippets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa-switch-button',
  templateUrl: './aa-switch-button.component.html',
  styleUrls: ['./aa-switch-button.component.sass']
})
export class AaSwitchButtonComponent implements OnInit {
  uiSwitchButton = uiSwitchButton;

  constructor() { }

  ngOnInit() {
  }

}
