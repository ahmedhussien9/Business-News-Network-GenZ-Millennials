import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GzmIconComponent, GzmLinkComponent } from '../../atoms';
import { GzmIconLinkClass } from './gzm-icon-link.class';

@Component({
  standalone: true,
  imports: [CommonModule, GzmIconComponent, GzmLinkComponent],
  selector: 'gzm-icon-link',
  templateUrl: './gzm-icon-link.component.html',
  styleUrl: './gzm-icon-link.component.scss',
})
export class GzmIconLinkComponent {
  @Input() properties!: GzmIconLinkClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmIconLinkClass();
    }
  }
}
