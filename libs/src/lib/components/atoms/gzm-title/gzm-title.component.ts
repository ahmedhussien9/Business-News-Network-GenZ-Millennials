import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmTitleClass } from './gzm-title.class';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'gzm-title',
  templateUrl: './gzm-title.component.html',
  styleUrl: './gzm-title.component.scss',
})
export class GzmTitleComponent {
  @Input() properties!: GzmTitleClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmTitleClass();
    }
  }
}
