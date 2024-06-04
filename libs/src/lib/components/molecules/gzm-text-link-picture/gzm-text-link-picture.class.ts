import { GzmPictureClass, GzmTextClass, ISource } from '../../atoms';
import { GzmLinkClass } from '../../atoms/gzm-link';

/**
 * Represents a class for a text link picture component.
 */
export class GzmTextLinkPictureClass {
  title = new GzmTextClass();
  url = new GzmLinkClass('');
  picture = new GzmPictureClass();

  visible = true;

  /**
   * Sets the visibility of the component.
   * @param visible - A boolean value indicating the visibility of the component.
   */
  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  /**
   * Sets the title of the component.
   * @param title - The title to be set.
   */
  setTitle(title: string): void {
    this.title.setText(title);
  }

  /**
   * Sets the URL of the component.
   * @param url - The URL to be set.
   */
  setUrl(url: string): void {
    this.url.setHref(url);
  }

  /**
   * Sets the picture sources of the component.
   * @param sources - An array of picture sources.
   */
  setPictureSources(sources: ISource[]) {
    this.picture.setSources(sources);
  }

  /**
   * Sets the default picture source of the component.
   * @param source - The default picture source to be set.
   */
  setDefaultSource(source: ISource) {
    this.picture.setDefaultSource(source);
  }
}
