import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmVideoClass } from './gzm-video.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-video',
  templateUrl: './gzm-video.component.html',
  styleUrl: './gzm-video.component.scss',
})
export class GzmVideoComponent {
  @Input() properties!: GzmVideoClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmVideoClass();
    }
  }
}
