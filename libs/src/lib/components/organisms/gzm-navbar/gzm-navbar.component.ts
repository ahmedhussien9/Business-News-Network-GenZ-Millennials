import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GzmIconLinkClass, GzmIconLinkComponent } from '../../molecules';
import { GzmNavbarPropertiesClass } from './gzm-navbar.class';
import {
  GzmIconClass,
  GzmIconComponent,
  GzmImageComponent,
  GzmTextClass,
  GzmTextComponent,
} from '../../atoms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmTextComponent,
    GzmImageComponent,
    GzmIconComponent,
    GzmIconLinkComponent,
  ],
  selector: 'gzm-navbar',
  templateUrl: './gzm-navbar.component.html',
  styleUrl: './gzm-navbar.component.scss',
})
export class GzmNavbarComponent {
  @Input() properties!: GzmNavbarPropertiesClass;

  logoProperties: GzmTextClass = new GzmTextClass();
  notificationIcon: GzmIconClass = new GzmIconClass();
  homePageProps = new GzmIconLinkClass();
  newsPageProps = new GzmIconLinkClass();

  constructor() {
    this.logoProperties.setText('GenZ Millennials');
    this.logoProperties.setVisible(true);
    this.notificationIcon.setIcon('icon-bell');
    this.notificationIcon.setVisibility(true);

    this.homePageProps.setLink('/feed');
    this.homePageProps.setIcon('icon-home');
    this.homePageProps.setVisibility(true);

    this.newsPageProps.setLink('/news');
    this.newsPageProps.setIcon('icon-newspaper');
    this.newsPageProps.setVisibility(true);

    if (!this.properties) {
      this.properties = new GzmNavbarPropertiesClass();
    }
  }
}
