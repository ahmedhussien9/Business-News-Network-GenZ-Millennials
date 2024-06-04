import { GzmIconClass, GzmTextClass } from '../../atoms';

export class GzmIconTextClass {
  icon = new GzmIconClass();
  text = new GzmTextClass();
  public visible = false;
  style: { [key: string]: string } = {};

  setIcon(icon: string): void {
    this.icon.setIcon(icon);
  }

  setText(text: string): void {
    this.text.setText(text);
  }

  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  setStyle(style: { [key: string]: string }): void {
    this.style = style;
  }
}
