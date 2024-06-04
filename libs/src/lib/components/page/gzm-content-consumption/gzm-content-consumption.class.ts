import { ISource } from '../../atoms';
import {
  GzmCardTitlePictureLinksDividerClass,
  GzmCardVideoPictureIconTitleClass,
  GzmCardVideoTitleLinkClass,
} from '../../organisms';

/**
 * Represents the GzmContentConsumptionClass.
 */
export class GzmContentConsumptionClass {
  /**
   * The main feature item.
   */
  public mainFeatureItem!: GzmCardTitlePictureLinksDividerClass;

  /**
   * The second feature items.
   */
  public secondFeatureItems!: GzmCardTitlePictureLinksDividerClass[];

  /**
   * The third feature items.
   */
  public thirdFeatureItems!: GzmCardTitlePictureLinksDividerClass[];

  /**
   * The paid content items.
   */
  public paidContentItems!: GzmCardVideoPictureIconTitleClass[];

  /**
   * The first video item.
   */
  public firstVideoItem!: GzmCardVideoTitleLinkClass;

  /**
   * The second video item.
   */
  public secondVideoItem!: GzmCardVideoTitleLinkClass;

  /**
   * The innovate items.
   */
  public innovateItems!: GzmCardVideoPictureIconTitleClass[];

  /**
   * Initializes a new instance of the GzmContentConsumptionClass.
   */
  constructor() {
    this.mainFeatureItem = new GzmCardTitlePictureLinksDividerClass();
    this.firstVideoItem = new GzmCardVideoTitleLinkClass();
    this.secondVideoItem = new GzmCardVideoTitleLinkClass();
  }

  /**
   * Sets the title of the main feature item.
   * @param title - The title to set.
   */
  public setMainFeatureItemTitle(title: string): void {
    this.mainFeatureItem.titleLinkProps.title.setTitle(title);
  }

  /**
   * Sets the sources of the main feature item.
   * @param sources - The sources to set.
   */
  public setMainFeatureItemSource(sources: ISource[]): void {
    this.mainFeatureItem.pictureLinkProps.picture.setSources(sources);
  }

  /**
   * Sets the default source of the main feature item.
   * @param source - The default source to set.
   */
  public setMainFeatureItemDefaultSource(source: ISource): void {
    this.mainFeatureItem.pictureLinkProps.picture.setDefaultSource(source);
  }

  /**
   * Sets the related links of the main feature item.
   * @param relatedLinks - The related links to set.
   */
  public setMainFeatureItemRelatedLink(relatedLinks: any) {
    this.mainFeatureItem.setTextLinkProps(relatedLinks);
    this.mainFeatureItem.textLinkPictureProps.map((textLink) => {
      textLink.title.setSize('large');
      textLink.title.setLineHeight('1.3rem');
      textLink.picture.setVisible(true);
    });
  }

  /**
   * Sets the visibility of the main feature item picture.
   */
  public setVisibiltyMainFeaturePicture() {
    this.mainFeatureItem.pictureLinkProps.picture.setVisible(true);
  }

  /**
   * Sets the data of the main feature item.
   * @param item - The data to set.
   */
  public setMainFeatureItemData(item: any) {
    this.setVisibiltyMainFeaturePicture();
    this.setMainFeatureItemTitle(item.title);
    this.setMainFeatureItemSource(item.sources);
    this.setMainFeatureItemDefaultSource(item.defaultSource);
    this.setMainFeatureItemRelatedLink(item.relatedLinks);
  }

  // End Main Feature item

  // Start Second Feature Item

  /**
   * Sets the data of the second feature items.
   * @param items - The data to set.
   */
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

  /**
   * Sets the data of the video section.
   * @param items - The data to set.
   */
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

  /**
   * Sets the data of the third feature items.
   * @param items - The data to set.
   */
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

  /**
   * Sets the data of the paid content items.
   * @param items - The data to set.
   */
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
