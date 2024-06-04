import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmPictureLinkClass } from './gzm-picture-link.class';
import { GzmLinkComponent, GzmPictureComponent } from '../../atoms';

@Component({
  standalone: true,
  imports: [CommonModule, GzmPictureComponent, GzmLinkComponent],
  selector: 'gzm-picture-link',
  templateUrl: './gzm-picture-link.component.html',
  styleUrl: './gzm-picture-link.component.scss',
})
export class GzmPictureLinkComponent {
  @Input() properties = new GzmPictureLinkClass();

  constructor() {
    if (!this.properties) {
      this.properties = new GzmPictureLinkClass();
    }
  }
}
