import { GzmIconLinkClass } from '../../molecules';

export class GzmPostCreatorPropertiesClass {
  mediaLinkProps = new GzmIconLinkClass();
  eventLinkProps = new GzmIconLinkClass();
  writeLinkProps = new GzmIconLinkClass();

  constructor() {
    this.mediaLinkProps.setIcon('icon-image');
    this.mediaLinkProps.setVisibility(true);
    this.mediaLinkProps.setLinkLabel('Media');

    this.eventLinkProps.setIcon('icon-calendar');
    this.eventLinkProps.setVisibility(true);
    this.eventLinkProps.setLinkLabel('Event');

    this.writeLinkProps.setIcon('icon-article');
    this.writeLinkProps.setVisibility(true);
    this.writeLinkProps.setLinkLabel('Write');
  }
}
