import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmIconClass } from './gzm-icon.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-icon',
  templateUrl: './gzm-icon.component.html',
  styleUrl: './gzm-icon.component.scss',
})
export class GzmIconComponent {
  @Input() properties!: GzmIconClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmIconClass();
    }
  }
}
