/**
 * Represents a class for managing properties of a GzmImage.
 */
export class GzmImageClass {
  _visible = true;
  _alt!: string;
  _title!: string;
  _customClass!: string;
  _src!: string;
  _styles: { [key: string]: string } = {};

  /**
   * Sets the visibility of the GzmImage.
   * @param visible - The visibility value.
   */
  visibilty(visible: boolean): void {
    this._visible = visible;
  }

  /**
   * Gets the visibility of the GzmImage.
   * @returns The visibility value.
   */
  get visible(): boolean {
    return this._visible;
  }

  /**
   * Sets the alt text of the GzmImage.
   * @param alt - The alt text value.
   */
  set alt(alt: string) {
    this._alt = alt;
  }

  /**
   * Gets the alt text of the GzmImage.
   * @returns The alt text value.
   */
  get alt(): string {
    return this._alt;
  }

  /**
   * Sets the title of the GzmImage.
   * @param title - The title value.
   */
  setTitle(title: string) {
    this._title = title;
  }

  /**
   * Gets the title of the GzmImage.
   * @returns The title value.
   */
  get title(): string {
    return this._title;
  }

  /**
   * Sets the custom class of the GzmImage.
   * @param customClass - The custom class value.
   */
  setCustomClass(customClass: string) {
    this._customClass = customClass;
  }

  /**
   * Gets the custom class of the GzmImage.
   * @returns The custom class value.
   */
  get customClass(): string {
    return this._customClass;
  }

  /**
   * Sets the source URL of the GzmImage.
   * @param src - The source URL value.
   */
  setSrc(src: string) {
    this._src = src;
  }

  /**
   * Gets the source URL of the GzmImage.
   * @returns The source URL value.
   */
  get src(): string {
    return this._src;
  }

  /**
   * Sets the styles of the GzmImage.
   * @param styles - The styles object.
   */
  setStyles(styles: { [key: string]: string }) {
    this._styles = styles;
  }

  /**
   * Gets the styles of the GzmImage.
   * @returns The styles object.
   */
  get styles(): { [key: string]: string } {
    return this._styles;
  }
}
