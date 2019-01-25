import { uiSecondaryButton } from './../../../constants/codeSnippets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aa-button',
  templateUrl: './aa-button.component.html',
  styleUrls: ['./aa-button.component.sass']
})
export class AaButtonComponent implements OnInit {
  uiSecondaryButton = uiSecondaryButton;

  constructor() { }

  ngOnInit() {
  }

  mockSave() {
    alert('Thank you!');
  }

}
