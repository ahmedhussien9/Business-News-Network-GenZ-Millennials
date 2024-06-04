/**
 * Represents a class for managing the properties of a GzmTitle.
 */
export class GzmTitleClass {
  /**
   * The title of the GzmTitle.
   */
  title!: string;

  /**
   * Indicates whether the GzmTitle is visible or not.
   */
  visible = true;

  /**
   * The size of the GzmTitle.
   */
  size!: string;

  /**
   * The line height of the GzmTitle.
   */
  lineHeight!: string;

  /**
   * The font weight of the GzmTitle.
   */
  fontWeight!: string;

  /**
   * The color of the GzmTitle.
   */
  color!: string;

  /**
   * Sets the title of the GzmTitle.
   * @param title - The title to set.
   */
  setTitle(title: string) {
    this.title = title;
  }

  /**
   * Gets the value of the title property.
   * @returns The value of the title property.
   */
  get titleValue(): string {
    return this.title;
  }

  /**
   * Sets the visibility of the GzmTitle.
   * @param visible - The visibility to set.
   */
  setVisible(visible: boolean) {
    this.visible = visible;
  }

  /**
   * Sets the size of the GzmTitle.
   * @param size - The size to set.
   */
  setSize(size: string) {
    this.size = size;
  }

  /**
   * Sets the line height of the GzmTitle.
   * @param lineHeight - The line height to set.
   */
  setLineHeight(lineHeight: string) {
    this.lineHeight = lineHeight;
  }

  /**
   * Sets the font weight of the GzmTitle.
   * @param fontWeight - The font weight to set.
   */
  setFontWeight(fontWeight: string) {
    this.fontWeight = fontWeight;
  }

  /**
   * Sets the color of the GzmTitle.
   * @param color - The color to set.
   */
  setColor(color: string) {
    this.color = color;
  }
}
