import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { GzmDividerTextLinkIconClass } from './gzm-divider-text-link-icon.class';
import {
  GzmDividerComponent,
  GzmIconComponent,
  GzmLinkComponent,
  GzmTextComponent,
} from '../../atoms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmDividerComponent,
    GzmLinkComponent,
    GzmTextComponent,
    GzmIconComponent,
  ],
  selector: 'gzm-divider-text-link-icon',
  templateUrl: './gzm-divider-text-link-icon.component.html',
  styleUrl: './gzm-divider-text-link-icon.component.scss',
})
export class GzmDividerTextLinkIconComponent implements OnInit {
  @Input() properties!: GzmDividerTextLinkIconClass;

  ngOnInit(): void {
    if (!this.properties) {
      this.properties = new GzmDividerTextLinkIconClass();
    }
  }
}
