/**
 * Represents a class for a GzmLink component.
 */
export class GzmLinkClass {
  private _target!: string;
  private _href!: string;
  private _fontSize!: string;
  private _fontWeight!: string;
  private _customClass!: string;
  private _visible = true;
  private _label!: string;

  public _click: (() => void | undefined) | undefined;

  constructor(public href: string) {
    this._href = href;
  }

  /**
   * Sets the target attribute of the link.
   * @param target - The target attribute value.
   */
  setTarget(target: string) {
    this._target = target;
  }

  /**
   * Sets the href attribute of the link.
   * @param link - The href attribute value.
   */
  setHref(link: string) {
    this._href = link;
  }

  /**
   * Gets the href attribute of the link.
   * @returns The href attribute value.
   */
  get link() {
    return this._href;
  }

  /**
   * Gets the target attribute of the link.
   * @returns The target attribute value.
   */
  get target() {
    return this._target;
  }

  /**
   * Sets the font size of the link.
   * @param fontSize - The font size value.
   */
  setFontSize(fontSize: string) {
    this._fontSize = fontSize;
  }

  /**
   * Gets the font size of the link.
   * @returns The font size value.
   */
  get fontSize() {
    return this._fontSize;
  }

  /**
   * Sets the font weight of the link.
   * @param fontWeight - The font weight value.
   */
  setFontWeight(fontWeight: string) {
    this._fontWeight = fontWeight;
  }

  /**
   * Gets the font weight of the link.
   * @returns The font weight value.
   */
  get fontWeight() {
    return this._fontWeight;
  }

  /**
   * Sets the custom class of the link.
   * @param customClass - The custom class value.
   */
  setCustomClass(customClass: string) {
    this._customClass = customClass;
  }

  /**
   * Gets the custom class of the link.
   * @returns The custom class value.
   */
  get customClass() {
    return this._customClass;
  }

  /**
   * Gets the visibility of the link.
   * @returns The visibility value.
   */
  get visible() {
    return this._visible;
  }

  /**
   * Sets the visibility of the link.
   * @param visible - The visibility value.
   */
  setVisible(visible: boolean) {
    this._visible = visible;
  }

  /**
   * Executes the click event of the link.
   */
  public click() {
    if (this._click) {
      this._click();
    }
  }

  /**
   * Sets the label of the link.
   * @param label - The label value.
   */
  public setLabel(label: string) {
    this._label = label;
  }

  /**
   * Gets the label of the link.
   * @returns The label value.
   */
  get label() {
    return this._label;
  }
}
