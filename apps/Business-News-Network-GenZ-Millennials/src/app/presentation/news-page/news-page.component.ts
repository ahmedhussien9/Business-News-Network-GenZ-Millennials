import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  GzmContentConsumptionComponent,
  GzmContentConsumptionClass,
  GzmCardVideoPictureIconTitleComponent,
} from '@bbn/gzm-ui-library';
import { Store } from '@ngxs/store';
import { LoadMediaData } from '../../state/media/media.actions';
import { MediaState } from '../../state/media/media.state';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    GzmContentConsumptionComponent,
    GzmCardVideoPictureIconTitleComponent,
  ],
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
})
export class NewsPageComponent {
  newsProps!: GzmContentConsumptionClass;

  constructor(private store: Store) {
    this.newsProps = new GzmContentConsumptionClass();
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadMediaData());

    const featureItems = this.store.selectSnapshot(MediaState.type1Items);
    const { mainFeatureItem, secondFeatureItems, thirdFeatureItems } =
      featureItems;
    const paidContentItems = this.store.selectSnapshot(MediaState.type4Items);

    const videoItems = this.store.selectSnapshot(MediaState.type3Items);

    this.newsProps.setVideoSectionData(videoItems);
    this.newsProps.setMainFeatureItemData(mainFeatureItem);
    this.newsProps.setSecondFeatureItemData(secondFeatureItems);
    this.newsProps.setThirdFeatureItemData(thirdFeatureItems);

    this.newsProps.setPaidContentItems(paidContentItems);
  }
}
