import { ISource } from '../../atoms';
import {
  GzmCardTitlePictureLinksDividerClass,
  GzmCardVideoPictureIconTitleClass,
  GzmCardVideoTitleLinkClass,
} from '../../organisms';

export class GzmContentConsumptionClass {
  public mainFeatureItem!: GzmCardTitlePictureLinksDividerClass;
  public secondFeatureItems!: GzmCardTitlePictureLinksDividerClass[];
  public thirdFeatureItems!: GzmCardTitlePictureLinksDividerClass[];

  public paidContentItems!: GzmCardVideoPictureIconTitleClass[];

  public firstVideoItem!: GzmCardVideoTitleLinkClass;
  public secondVideoItem!: GzmCardVideoTitleLinkClass;

  public innovateItems!: GzmCardVideoPictureIconTitleClass[];

  // Start Set Main Feature Item

  constructor() {
    this.mainFeatureItem = new GzmCardTitlePictureLinksDividerClass();
    this.firstVideoItem = new GzmCardVideoTitleLinkClass();
    this.secondVideoItem = new GzmCardVideoTitleLinkClass();
  }

  public setMainFeatureItemTitle(title: string): void {
    this.mainFeatureItem.titleLinkProps.title.setTitle(title);
  }

  public setMainFeatureItemSource(sources: ISource[]): void {
    this.mainFeatureItem.pictureLinkProps.picture.setSources(sources);
  }

  public setMainFeatureItemDefaultSource(source: ISource): void {
    this.mainFeatureItem.pictureLinkProps.picture.setDefaultSource(source);
  }

  public setMainFeatureItemRelatedLink(relatedLinks: any) {
    this.mainFeatureItem.setTextLinkProps(relatedLinks);
    this.mainFeatureItem.textLinkPictureProps.map((textLink) => {
      textLink.title.setSize('large');
      textLink.title.setLineHeight('1.3rem');
      textLink.picture.setVisible(true);
    });
  }

  public setVisibiltyMainFeaturePicture() {
    this.mainFeatureItem.pictureLinkProps.picture.setVisible(true);
  }
  public setMainFeatureItemData(item: any) {
    this.setVisibiltyMainFeaturePicture();
    this.setMainFeatureItemTitle(item.title);
    this.setMainFeatureItemSource(item.sources);
    this.setMainFeatureItemDefaultSource(item.defaultSource);
    this.setMainFeatureItemRelatedLink(item.relatedLinks);
  }

  // End Main Feature item

  // Start Second Feature Item

  setSecondFeatureItemData(items: any) {
    this.secondFeatureItems = [];
    this.secondFeatureItems = items.map((item: any) => {
      const cardTitlePictureLinksDivider =
        new GzmCardTitlePictureLinksDividerClass();
      cardTitlePictureLinksDivider.titleLinkProps.title.setTitle(item.title);
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setSources(
        item.sources
      );
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setDefaultSource(
        item.defaultSource
      );
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setVisible(true);
      return cardTitlePictureLinksDivider;
    });
  }
  // End Second Feature Item

  public setVideoSectionData(items: any[]) {
    this.innovateItems = items.map((item) => {
      const cardVideoPictureIconTitle = new GzmCardVideoPictureIconTitleClass();
      cardVideoPictureIconTitle.pictureLink.picture.setSources(item.sources);
      cardVideoPictureIconTitle.pictureLink.picture.setDefaultSource(
        item.defaultSource
      );
      cardVideoPictureIconTitle.iconText.setText(item.videoDuration);
      cardVideoPictureIconTitle.iconText.text.setSize('small');
      cardVideoPictureIconTitle.iconText.text.setFontWeight('bold');
      cardVideoPictureIconTitle.iconText.setIcon('icon-play2');
      cardVideoPictureIconTitle.iconText.text.setColor('white');
      cardVideoPictureIconTitle.textLinkPicture.setTitle(item.title);
      cardVideoPictureIconTitle.textLinkPicture.title.setSize('x-large');
      cardVideoPictureIconTitle.textLinkPicture.title.setFontWeight('bold');
      cardVideoPictureIconTitle.pictureLink.picture.setVisible(true);
      return cardVideoPictureIconTitle;
    });
  }

  setThirdFeatureItemData(items: any) {
    this.thirdFeatureItems = [];
    this.thirdFeatureItems = items.map((item: any) => {
      const cardTitlePictureLinksDivider =
        new GzmCardTitlePictureLinksDividerClass();
      cardTitlePictureLinksDivider.titleLinkProps.title.setTitle(item.title);
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setSources(
        item.sources
      );
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setDefaultSource(
        item.defaultSource
      );
      cardTitlePictureLinksDivider.pictureLinkProps.picture.setVisible(true);
      return cardTitlePictureLinksDivider;
    });
  }

  setPaidContentItems(items: any) {
    this.paidContentItems = [];
    this.paidContentItems = items.map((item: any) => {
      const cardVideoPictureIconTitle = new GzmCardVideoPictureIconTitleClass();
      cardVideoPictureIconTitle.pictureLink.picture.setSources(item.sources);
      cardVideoPictureIconTitle.pictureLink.picture.setDefaultSource(
        item.defaultSource
      );
      cardVideoPictureIconTitle.iconText.setText(item.videoDuration);
      cardVideoPictureIconTitle.iconText.text.setSize('small');
      cardVideoPictureIconTitle.iconText.text.setFontWeight('bold');
      cardVideoPictureIconTitle.iconText.setIcon('icon-play2');
      cardVideoPictureIconTitle.iconText.text.setColor('white');
      cardVideoPictureIconTitle.textLinkPicture.setTitle(item.title);
      cardVideoPictureIconTitle.textLinkPicture.title.setSize('x-large');
      cardVideoPictureIconTitle.textLinkPicture.title.setFontWeight('bold');
      cardVideoPictureIconTitle.pictureLink.picture.setVisible(true);
      return cardVideoPictureIconTitle;
    });
  }
}
