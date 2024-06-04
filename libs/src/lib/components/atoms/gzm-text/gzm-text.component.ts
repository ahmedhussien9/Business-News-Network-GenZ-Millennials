import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmTextClass } from './gzm-text.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-text',
  templateUrl: './gzm-text.component.html',
  styleUrl: './gzm-text.component.scss',
})
export class GzmTextComponent {
  @Input() properties!: GzmTextClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmTextClass();
    }
  }
}
