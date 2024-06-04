/**
 * Represents a class for managing the properties of a GzmIcon.
 */
export class GzmIconClass {
  public _icon!: string;
  public _visible = true;

  /**
   * Sets the visibility of the GzmIcon.
   * @param visible - A boolean value indicating the visibility of the GzmIcon.
   */
  setVisibility(visible: boolean): void {
    this._visible = visible;
  }

  /**
   * Gets the visibility of the GzmIcon.
   * @returns A boolean value indicating the visibility of the GzmIcon.
   */
  get visible(): boolean {
    return this.visible;
  }

  /**
   * Sets the icon of the GzmIcon.
   * @param icon - The icon to be set for the GzmIcon.
   */
  setIcon(icon: string): void {
    this._icon = icon;
  }

  /**
   * Gets the icon of the GzmIcon.
   * @returns The icon of the GzmIcon.
   */
  get icon(): string {
    return this._icon;
  }
}
