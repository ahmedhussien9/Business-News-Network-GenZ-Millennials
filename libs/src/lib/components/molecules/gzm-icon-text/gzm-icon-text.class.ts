import { GzmIconClass, GzmTextClass } from '../../atoms';

/**
 * Represents a class for the GzmIconText component.
 */
export class GzmIconTextClass {
  icon = new GzmIconClass();
  text = new GzmTextClass();
  public visible = false;
  style: { [key: string]: string } = {};

  /**
   * Sets the icon for the GzmIconText component.
   * @param icon The icon to set.
   */
  setIcon(icon: string): void {
    this.icon.setIcon(icon);
  }

  /**
   * Sets the text for the GzmIconText component.
   * @param text The text to set.
   */
  setText(text: string): void {
    this.text.setText(text);
  }

  /**
   * Sets the visibility of the GzmIconText component.
   * @param visible The visibility to set.
   */
  setVisibility(visible: boolean): void {
    this.visible = visible;
  }

  /**
   * Sets the style for the GzmIconText component.
   * @param style The style to set.
   */
  setStyle(style: { [key: string]: string }): void {
    this.style = style;
  }
}
