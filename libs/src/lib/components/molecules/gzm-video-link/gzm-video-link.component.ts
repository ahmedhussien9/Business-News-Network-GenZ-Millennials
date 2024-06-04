import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmLinkComponent } from '../../atoms/gzm-link';
import { GzmVideoComponent } from '../../atoms';
import { GzmVideoLinkClass } from './gzm-video-link.class';

@Component({
  standalone: true,
  imports: [CommonModule, GzmVideoComponent, GzmLinkComponent],
  selector: 'gzm-video-link',
  templateUrl: './gzm-video-link.component.html',
  styleUrl: './gzm-video-link.component.scss',
})
export class GzmVideoLinkComponent {
  @Input() properties!: GzmVideoLinkClass;
}
