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
  selector: 'app-content-consumption',
  templateUrl: './content-consumption.component.html',
  styleUrl: './content-consumption.component.scss',
})
export class ContentConsumptionComponent {
  contentConsumption!: GzmContentConsumptionClass;

  constructor(private store: Store) {
    this.contentConsumption = new GzmContentConsumptionClass();
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadMediaData());

    const featureItems = this.store.selectSnapshot(MediaState.type1Items);
    const { mainFeatureItem, secondFeatureItems, thirdFeatureItems } =
      featureItems;
    const paidContentItems = this.store.selectSnapshot(MediaState.type4Items);

    const videoItems = this.store.selectSnapshot(MediaState.type3Items);

    this.contentConsumption.setVideoSectionData(videoItems);
    this.contentConsumption.setMainFeatureItemData(mainFeatureItem);
    this.contentConsumption.setSecondFeatureItemData(secondFeatureItems);
    this.contentConsumption.setThirdFeatureItemData(thirdFeatureItems);

    this.contentConsumption.setPaidContentItems(paidContentItems);
  }
}
