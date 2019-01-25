import { Component, OnInit } from '@angular/core';
import {
  uiCloseButton,
  uiDropDown,
  uiMultiSelectRow,
  uiMultiselectCheckbox,
} from './../../constants/codeSnippets';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.sass']
})
export class ComponentsComponent implements OnInit {
  closeButton = uiCloseButton;
  uiMultiSelectRow = uiMultiSelectRow;
  uiMultiselectCheckbox = uiMultiselectCheckbox;
  uiDropDown = uiDropDown;

  constructor() { }

  ngOnInit() {
  }

}
