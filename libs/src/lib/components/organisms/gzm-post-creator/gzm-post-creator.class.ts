import { GzmIconLinkClass } from '../../molecules';

/**
 * Represents the properties of the GzmPostCreatorClass.
 */
export class GzmPostCreatorPropertiesClass {
  mediaLinkProps = new GzmIconLinkClass();
  eventLinkProps = new GzmIconLinkClass();
  writeLinkProps = new GzmIconLinkClass();

  constructor() {
    /**
     * Sets the icon, visibility, and link label for the media link.
     */
    this.mediaLinkProps.setIcon('icon-image');
    this.mediaLinkProps.setVisibility(true);
    this.mediaLinkProps.setLinkLabel('Media');

    /**
     * Sets the icon, visibility, and link label for the event link.
     */
    this.eventLinkProps.setIcon('icon-calendar');
    this.eventLinkProps.setVisibility(true);
    this.eventLinkProps.setLinkLabel('Event');

    /**
     * Sets the icon, visibility, and link label for the write link.
     */
    this.writeLinkProps.setIcon('icon-article');
    this.writeLinkProps.setVisibility(true);
    this.writeLinkProps.setLinkLabel('Write');
  }
}
