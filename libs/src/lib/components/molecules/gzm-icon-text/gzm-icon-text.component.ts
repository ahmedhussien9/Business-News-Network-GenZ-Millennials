import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GzmIconComponent, GzmTextComponent } from '../../atoms';
import { GzmIconTextClass } from './gzm-icon-text.class';

@Component({
  standalone: true,
  imports: [CommonModule, GzmIconComponent, GzmTextComponent],
  selector: 'gzm-icon-text',
  templateUrl: './gzm-icon-text.component.html',
  styleUrl: './gzm-icon-text.component.scss',
})
export class GzmIconTextComponent {
  @Input() properties!: GzmIconTextClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmIconTextClass();
    }
  }
}
