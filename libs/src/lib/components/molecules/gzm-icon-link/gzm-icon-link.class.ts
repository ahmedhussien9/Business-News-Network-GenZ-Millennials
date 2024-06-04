import { GzmIconClass, GzmLinkClass } from '../../atoms';

/**
 * Represents a class for GzmIconLink.
 */
export class GzmIconLinkClass {
  icon = new GzmIconClass();
  link = new GzmLinkClass('');
  public visible = false;
  style: { [key: string]: string } = {};

  /**
   * Sets the icon for the GzmIconLink.
   * @param icon - The icon to set.
   */
  setIcon(icon: string): void {
    this.icon.setIcon(icon);
  }

  /**
   * Sets the link for the GzmIconLink.
   * @param link - The link to set.
   */
  setLink(link: string): void {
    this.link.setHref(link);
  }

  /**
   * Sets the label for the link in the GzmIconLink.
   * @param label - The label to set.
   */
  setLinkLabel(label: string) {
    this.link.setLabel(label);
  }

  /**
   * Sets the visibility of the GzmIconLink.
   * @param visible - The visibility to set.
   */
  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  /**
   * Sets the style for the GzmIconLink.
   * @param style - The style to set.
   */
  setStyle(style: { [key: string]: string }): void {
    this.style = style;
  }
}
