import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmLinkComponent } from '../../atoms/gzm-link';
import { GzmTitleComponent } from '../../atoms/gzm-title';
import { GzmTitleLinkClass } from './gzm-title-link.class';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmTitleLinkComponent,
    GzmTitleComponent,
    GzmLinkComponent,
  ],
  selector: 'gzm-title-link',
  templateUrl: './gzm-title-link.component.html',
  styleUrl: './gzm-title-link.component.scss',
})
export class GzmTitleLinkComponent {
  @Input() properties!: GzmTitleLinkClass;

  constructor() {
    if (!this.properties) {
      this.properties = new GzmTitleLinkClass();
    }
  }
}
