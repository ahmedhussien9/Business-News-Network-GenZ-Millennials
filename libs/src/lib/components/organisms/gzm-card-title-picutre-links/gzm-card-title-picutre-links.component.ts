import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmCardTitlePictureLinksDividerClass } from './gzm-card-title-picutre-links.class';
import {
  GzmDividerTextLinkIconComponent,
  GzmPictureLinkComponent,
  GzmTextLinkPictureComponent,
  GzmTitleLinkComponent,
} from '../../molecules';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmTextLinkPictureComponent,
    GzmTitleLinkComponent,
    GzmPictureLinkComponent,
    GzmDividerTextLinkIconComponent,
  ],
  selector: 'gzm-card-title-picutre-links',
  templateUrl: './gzm-card-title-picutre-links.component.html',
  styleUrl: './gzm-card-title-picutre-links.component.scss',
})
export class GzmCardTitlePictureLinksComponent {
  @Input() properties!: GzmCardTitlePictureLinksDividerClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmCardTitlePictureLinksDividerClass();
    }
  }
}
