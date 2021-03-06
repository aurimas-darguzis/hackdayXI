import { uiCloseButton } from './../../../constants/codeSnippets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.sass']
})
export class CloseButtonComponent implements OnInit {
  closeButton = uiCloseButton;
  constructor() { }

  ngOnInit() {
  }

}
