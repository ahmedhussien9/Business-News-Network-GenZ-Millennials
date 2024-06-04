import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmPictureLinkComponent } from '../../molecules/gzm-picture-link';
import { GzmIconTextComponent } from '../../molecules/gzm-icon-text';
import { GzmCardVideoPictureIconTitleClass } from './gzm-card-videoPicture-icon-title.class';
import { GzmTextLinkPictureComponent } from '../../molecules';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmPictureLinkComponent,
    GzmIconTextComponent,
    GzmTextLinkPictureComponent,
  ],
  selector: 'gzm-card-videopicture-icon-title',
  templateUrl: './gzm-card-videoPicture-icon-title.component.html',
  styleUrl: './gzm-card-videoPicture-icon-title.component.scss',
})
export class GzmCardVideoPictureIconTitleComponent {
  @Input() properties = new GzmCardVideoPictureIconTitleClass();
}
