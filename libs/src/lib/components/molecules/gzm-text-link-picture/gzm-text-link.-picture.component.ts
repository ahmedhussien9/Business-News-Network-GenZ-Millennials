import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  GzmTextComponent,
  GzmLinkComponent,
  GzmPictureComponent,
} from '../../atoms';
import { GzmTextLinkPictureClass } from './gzm-text-link-picture.class';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmTextComponent,
    GzmLinkComponent,
    GzmPictureComponent,
  ],
  selector: 'gzm-text-link-picture',
  templateUrl: './gzm-text-link-picture.component.html',
  styleUrl: './gzm-text-link-picture.component.scss',
})
export class GzmTextLinkPictureComponent {
  @Input() properties!: GzmTextLinkPictureClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmTextLinkPictureClass();
    }
  }
}
