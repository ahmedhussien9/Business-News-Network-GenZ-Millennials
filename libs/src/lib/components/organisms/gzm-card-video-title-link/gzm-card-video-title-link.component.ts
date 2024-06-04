import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmTitleLinkComponent, GzmVideoLinkComponent } from '../../molecules';
import { GzmCardVideoTitleLinkClass } from './gzm-card-video-title-link.class';

@Component({
  standalone: true,
  imports: [CommonModule, GzmVideoLinkComponent, GzmTitleLinkComponent],
  selector: 'gzm-card-video-title-link',
  templateUrl: './gzm-card-video-title-link.component.html',
  styleUrl: './gzm-card-video-title-link.component.scss',
})
export class GzmCardVideoTitleLinkComponent {
  @Input() properties!: GzmCardVideoTitleLinkClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmCardVideoTitleLinkClass();
    }
  }
}
