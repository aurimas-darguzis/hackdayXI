import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.sass']
})
export class CodeSnippetComponent implements OnInit {
  @Input() public  header;
  @Input() public  html;
  @Input() public  sass;
  @Input() public  ts;

  tooltip = 'Copy!';

  constructor() { }

  ngOnInit() {
  }

  onCopy(e: any) {
    console.log(e);
    const elToCopy = e.srcElement.parentElement.getAttribute('heading').toLowerCase();

    console.log('labas', elToCopy);
    // console.log('labas', e.srcElement.parentNode.attributes);
    console.log('elToCopy', elToCopy );
    this.tooltip = 'Copied!';
  }

}
