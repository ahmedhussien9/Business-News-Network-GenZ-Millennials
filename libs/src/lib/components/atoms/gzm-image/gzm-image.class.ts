export class GzmImageClass {
  _visible = true;
  _alt!: string;
  _title!: string;
  _customClass!: string;
  _src!: string;
  _styles: { [key: string]: string } = {};

  visibilty(visible: boolean): void {
    this._visible = visible;
  }

  get visible(): boolean {
    return this._visible;
  }

  set alt(alt: string) {
    this._alt = alt;
  }

  get alt(): string {
    return this._alt;
  }

  setTitle(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  setCustomClass(customClass: string) {
    this._customClass = customClass;
  }

  get customClass(): string {
    return this._customClass;
  }

  setSrc(src: string) {
    this._src = src;
  }

  get src(): string {
    return this._src;
  }

  setStyles(styles: { [key: string]: string }) {
    this._styles = styles;
  }

  get styles(): { [key: string]: string } {
    return this._styles;
  }
}
