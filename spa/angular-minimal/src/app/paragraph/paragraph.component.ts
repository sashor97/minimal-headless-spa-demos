import { Component, Input, AfterContentInit } from '@angular/core';

@Component({
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements AfterContentInit{

  @Input() content: object;
  toDisplay = "";
  //coolio = this.content['richText'];

  ngAfterContentInit(): void {
    if (this.content ) {
      this.toDisplay = this.content['richText'];
    }
  }
}
