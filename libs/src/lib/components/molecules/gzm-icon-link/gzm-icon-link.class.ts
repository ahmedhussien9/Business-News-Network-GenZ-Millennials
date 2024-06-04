import { GzmIconClass, GzmLinkClass } from '../../atoms';

export class GzmIconLinkClass {
  icon = new GzmIconClass();
  link = new GzmLinkClass('');
  public visible = false;
  style: { [key: string]: string } = {};

  setIcon(icon: string): void {
    this.icon.setIcon(icon);
  }

  setLink(link: string): void {
    this.link.setHref(link);
  }

  setLinkLabel(label: string) {
    this.link.setLabel(label);
  }

  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  setStyle(style: { [key: string]: string }): void {
    this.style = style;
  }
}
