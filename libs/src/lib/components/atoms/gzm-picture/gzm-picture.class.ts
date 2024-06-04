export interface ISource {
  height: number;
  width: number;
  type: 'large' | 'medium' | 'small' | 'xsmall';
  media: string;
  img: string;
}

/**
 * Represents a class for managing picture sources and visibility.
 */
export class GzmPictureClass {
  private _sources!: ISource[];
  private _defaultSource!: ISource;

  /**
   * Indicates whether the picture is visible or not.
   */
  public visible = false;

  /**
   * Sets the sources for the picture.
   * @param sources - An array of picture sources.
   */
  setSources(sources: ISource[]) {
    this._sources = sources;
  }

  /**
   * Gets the sources for the picture.
   * @returns An array of picture sources.
   */
  get sources(): ISource[] {
    return this._sources;
  }

  /**
   * Gets the default source for the picture.
   * @returns The default picture source.
   */
  get defaultSource(): ISource {
    return this._defaultSource;
  }

  /**
   * Sets the default source for the picture.
   * @param defaultSource - The default picture source.
   */
  setDefaultSource(defaultSource: ISource) {
    this._defaultSource = defaultSource;
  }

  /**
   * Sets the visibility of the picture.
   * @param visible - Indicates whether the picture should be visible or not.
   */
  setVisible(visible: boolean) {
    this.visible = visible;
  }
}
