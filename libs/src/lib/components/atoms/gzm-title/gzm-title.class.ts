export class GzmTitleClass {
  title!: string;
  visible = true;
  size!: string;
  lineHeight!: string;
  fontWeight!: string;
  color!: string;

  setTitle(title: string) {
    this.title = title;
  }

  get titleValue(): string {
    return this.title;
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
