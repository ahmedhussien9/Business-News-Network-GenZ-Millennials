import {
  GzmDividerTextLinkIconClass,
  GzmPictureLinkClass,
  GzmTextLinkPictureClass,
  GzmTitleLinkClass,
} from '../../molecules';

/**
 * Represents the class for the GzmCardTitlePictureLinksDivider.
 */
export class GzmCardTitlePictureLinksDividerClass {
  titleLinkProps = new GzmTitleLinkClass();
  pictureLinkProps = new GzmPictureLinkClass();
  textLinkPictureProps: GzmTextLinkPictureClass[] = [];
  dividerTextLinkIcon = new GzmDividerTextLinkIconClass();

  /**
   * Sets the text link properties based on the provided related links.
   * @param relatedLinks - The array of related links.
   */
  setTextLinkProps(relatedLinks: any) {
    this.textLinkPictureProps = [];
    relatedLinks.forEach((link: any) => {
      const textLinkProps = new GzmTextLinkPictureClass();
      textLinkProps.setTitle(link.title);
      textLinkProps.setUrl(link.url);
      textLinkProps.setDefaultSource(link.sources);
      textLinkProps.setDefaultSource(link.defaultSource);
      textLinkProps.setVisibility(true);
      this.textLinkPictureProps.push(textLinkProps);
    });
  }
}
