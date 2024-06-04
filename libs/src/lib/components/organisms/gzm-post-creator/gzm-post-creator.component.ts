import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmPostCreatorPropertiesClass } from './gzm-post-creator.class';
import { GzmIconLinkClass, GzmIconLinkComponent } from '../../molecules';

@Component({
  standalone: true,
  imports: [CommonModule, GzmIconLinkComponent],
  selector: 'gzm-post-creator',
  templateUrl: './gzm-post-creator.component.html',
  styleUrl: './gzm-post-creator.component.scss',
})
export class GzmPostCreatorComponent {
  @Input() properties!: GzmPostCreatorPropertiesClass;

  iconLinkProps = new GzmIconLinkClass();

  constructor() {
    this.iconLinkProps.setIcon('icon-image');
    this.iconLinkProps.setVisibility(true);
    if (!this.properties) {
      this.properties = new GzmPostCreatorPropertiesClass();
    }
  }
}
