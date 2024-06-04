/**
 * Represents a class for managing the properties of a GzmDivider.
 */
export class GzmDividerClass {
  grayColor = 'gray';
  redColor = 'red';
  height = '5px';
  initialRedWidth = '20px';
  transitionDuration = '0.5s';

  /**
   * Sets the gray color of the divider.
   * @param color - The color value to set.
   */
  setGrayColor(color: string): void {
    this.grayColor = color;
  }

  /**
   * Sets the red color of the divider.
   * @param color - The color value to set.
   */
  setRedColor(color: string): void {
    this.redColor = color;
  }

  /**
   * Sets the height of the divider.
   * @param height - The height value to set.
   */
  setHeight(height: string): void {
    this.height = height;
  }

  /**
   * Sets the initial width of the red part of the divider.
   * @param width - The width value to set.
   */
  setInitialRedWidth(width: string): void {
    this.initialRedWidth = width;
  }

  /**
   * Sets the transition duration of the divider.
   * @param duration - The duration value to set.
   */
  setTransitionDuration(duration: string): void {
    this.transitionDuration = duration;
  }

  /**
   * Gets the gray color of the divider.
   * @returns The gray color value.
   */
  getGrayColor(): string {
    return this.grayColor;
  }

  /**
   * Gets the red color of the divider.
   * @returns The red color value.
   */
  getRedColor(): string {
    return this.redColor;
  }

  /**
   * Gets the height of the divider.
   * @returns The height value.
   */
  getHeight(): string {
    return this.height;
  }

  /**
   * Gets the initial width of the red part of the divider.
   * @returns The initial width value.
   */
  getInitialRedWidth(): string {
    return this.initialRedWidth;
  }

  /**
   * Gets the transition duration of the divider.
   * @returns The transition duration value.
   */
  getTransitionDuration(): string {
    return this.transitionDuration;
  }
}
