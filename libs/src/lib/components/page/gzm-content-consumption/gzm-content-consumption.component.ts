import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  GzmCardTitlePictureLinksComponent,
  GzmCardVideoPictureIconTitleComponent,
  GzmCardVideoTitleLinkComponent,
} from '../../organisms';
import { GzmContentConsumptionClass } from './gzm-content-consumption.class';
import { GzmTitleClass, GzmTitleComponent } from '../../atoms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmCardTitlePictureLinksComponent,
    GzmCardVideoTitleLinkComponent,
    GzmTitleComponent,
    GzmCardVideoPictureIconTitleComponent,
  ],
  selector: 'gzm-content-consumption',
  templateUrl: './gzm-content-consumption.component.html',
  styleUrl: './gzm-content-consumption.component.scss',
})
export class GzmContentConsumptionComponent {
  @Input() properties = new GzmContentConsumptionClass();

  InnovateTitleProps = new GzmTitleClass();
  paidPartnerContentTitleProps = new GzmTitleClass();
  paidPartnerContentTitleProp2 = new GzmTitleClass();

  constructor() {
    this.InnovateTitleProps.setTitle('Innovate');
    this.InnovateTitleProps.setSize('xxxx-large');
    this.paidPartnerContentTitleProps.setTitle('Paid Partner Content');
    this.paidPartnerContentTitleProps.setSize('xxxx-large');
    this.paidPartnerContentTitleProp2.setTitle(
      'Unlock Smart and Tested Tech Deals on CNN Coupons'
    );
    this.paidPartnerContentTitleProp2.setSize('xx-large');
  }
}
