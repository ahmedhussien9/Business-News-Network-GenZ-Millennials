import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmLinkClass } from './gzm-link.class';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'gzm-link',
  templateUrl: './gzm-link.component.html',
  styleUrl: './gzm-link.component.scss',
})
export class GzmLinkComponent {
  @Input() properties!: GzmLinkClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmLinkClass('');
    }
  }
}
