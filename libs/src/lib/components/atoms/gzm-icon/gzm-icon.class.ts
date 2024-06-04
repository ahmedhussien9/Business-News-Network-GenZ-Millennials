export class GzmIconClass {
  public _icon!: string;
  public _visible = true;

  setVisibility(visible: boolean): void {
    this._visible = visible;
  }

  get visible(): boolean {
    return this.visible;
  }

  setIcon(icon: string): void {
    this._icon = icon;
  }

  get icon(): string {
    return this._icon;
  }
}
