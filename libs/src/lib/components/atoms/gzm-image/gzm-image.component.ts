import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmImageClass } from './gzm-image.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-image',
  templateUrl: './gzm-image.component.html',
  styleUrl: './gzm-image.component.scss',
})
export class GzmImageComponent {
  @Input() properties!: GzmImageClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmImageClass();
    }
  }
}
