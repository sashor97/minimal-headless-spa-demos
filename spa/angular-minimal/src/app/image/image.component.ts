import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  damUrl = environment.damRawUrl;
}
