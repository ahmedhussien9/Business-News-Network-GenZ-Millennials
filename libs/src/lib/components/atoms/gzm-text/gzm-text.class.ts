/**
 * Represents a class for managing text properties.
 */
export class GzmTextClass {
  _text!: string;
  visible = true;
  size!: string;
  lineHeight!: string;
  fontWeight!: string;
  color!: string;

  /**
   * Sets the text value.
   * @param text - The text value to set.
   */
  setText(text: string) {
    this._text = text;
  }

  /**
   * Gets the text value.
   * @returns The text value.
   */
  get textValue(): string {
    return this._text;
  }

  /**
   * Sets the visibility of the text.
   * @param visible - The visibility value to set.
   */
  setVisible(visible: boolean) {
    this.visible = visible;
  }

  /**
   * Sets the size of the text.
   * @param size - The size value to set.
   */
  setSize(size: string) {
    this.size = size;
  }

  /**
   * Sets the line height of the text.
   * @param lineHeight - The line height value to set.
   */
  setLineHeight(lineHeight: string) {
    this.lineHeight = lineHeight;
  }

  /**
   * Sets the font weight of the text.
   * @param fontWeight - The font weight value to set.
   */
  setFontWeight(fontWeight: string) {
    this.fontWeight = fontWeight;
  }

  /**
   * Sets the color of the text.
   * @param color - The color value to set.
   */
  setColor(color: string) {
    this.color = color;
  }
}
