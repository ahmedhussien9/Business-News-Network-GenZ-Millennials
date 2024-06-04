export class GzmTextClass {
  _text!: string;
  visible = true;
  size!: string;
  lineHeight!: string;
  fontWeight!: string;
  color!: string;

  setText(text: string) {
    this._text = text;
  }

  get textValue(): string {
    return this._text;
  }

  setVisible(visible: boolean) {
    this.visible = visible;
  }

  setSize(size: string) {
    this.size = size;
  }

  setLineHeight(lineHeight: string) {
    this.lineHeight = lineHeight;
  }

  setFontWeight(fontWeight: string) {
    this.fontWeight = fontWeight;
  }

  setColor(color: string) {
    this.color = color;
  }
  
}
