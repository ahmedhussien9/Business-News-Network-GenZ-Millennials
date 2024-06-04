import { GzmTextLinkPictureClass } from '../../molecules';
import { GzmIconTextClass } from '../../molecules/gzm-icon-text';
import { GzmPictureLinkClass } from '../../molecules/gzm-picture-link';

export class GzmCardVideoPictureIconTitleClass {
  private _visible = true;

  public iconText = new GzmIconTextClass();
  public pictureLink = new GzmPictureLinkClass();
  public textLinkPicture = new GzmTextLinkPictureClass();

  get visible(): boolean {
    return this._visible;
  }

  set visible(visible: boolean) {
    this._visible = visible;
  }

  setIcon(icon: string): void {
    this.iconText.setIcon(icon);
  }
}
