import { GzmTextLinkPictureClass } from '../../molecules';
import { GzmIconTextClass } from '../../molecules/gzm-icon-text';
import { GzmPictureLinkClass } from '../../molecules/gzm-picture-link';

/**
 * Represents a class for the GzmCardVideoPictureIconTitle component.
 */
export class GzmCardVideoPictureIconTitleClass {
  private _visible = true;

  /**
   * Represents the icon text for the component.
   */
  public iconText = new GzmIconTextClass();

  /**
   * Represents the picture link for the component.
   */
  public pictureLink = new GzmPictureLinkClass();

  /**
   * Represents the text link picture for the component.
   */
  public textLinkPicture = new GzmTextLinkPictureClass();

  /**
   * Gets the visibility status of the component.
   */
  get visible(): boolean {
    return this._visible;
  }

  /**
   * Sets the visibility status of the component.
   * @param visible - The visibility status to set.
   */
  set visible(visible: boolean) {
    this._visible = visible;
  }

  /**
   * Sets the icon for the component.
   * @param icon - The icon to set.
   */
  setIcon(icon: string): void {
    this.iconText.setIcon(icon);
  }
}
