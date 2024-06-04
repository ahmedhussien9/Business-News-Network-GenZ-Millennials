import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmPictureClass } from './gzm-picture.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-picture',
  templateUrl: './gzm-picture.component.html',
  styleUrl: './gzm-picture.component.scss',
})
export class GzmPictureComponent {
  @Input() properties!: GzmPictureClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmPictureClass();
    }
  }
  
  imageLoadError(event: any) {
    // Handle image load error
    return '';
  }
}
