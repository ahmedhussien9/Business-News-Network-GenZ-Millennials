import { GzmPictureClass, GzmTextClass, ISource } from '../../atoms';
import { GzmLinkClass } from '../../atoms/gzm-link';

export class GzmTextLinkPictureClass {
  title = new GzmTextClass();
  url = new GzmLinkClass('');
  picture = new GzmPictureClass();

  visible = true;

  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  setTitle(title: string): void {
    this.title.setText(title);
  }

  setUrl(url: string): void {
    this.url.setHref(url);
  }

  setPictureSources(sources: ISource[]) {
    this.picture.setSources(sources);
  }

  setDefaultSource(source: ISource) {
    this.picture.setDefaultSource(source);
  }
}
