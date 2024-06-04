export class GzmDividerClass {
  grayColor = 'gray';
  redColor = 'red';
  height = '5px';
  initialRedWidth = '20px';
  transitionDuration = '0.5s';

  setGrayColor(color: string): void {
    this.grayColor = color;
  }

  setRedColor(color: string): void {
    this.redColor = color;
  }

  setHeight(height: string): void {
    this.height = height;
  }

  setInitialRedWidth(width: string): void {
    this.initialRedWidth = width;
  }

  setTransitionDuration(duration: string): void {
    this.transitionDuration = duration;
  }

  getGrayColor(): string {
    return this.grayColor;
  }

  getRedColor(): string {
    return this.redColor;
  }

  getHeight(): string {
    return this.height;
  }

  getInitialRedWidth(): string {
    return this.initialRedWidth;
  }

  getTransitionDuration(): string {
    return this.transitionDuration;
  }
}
