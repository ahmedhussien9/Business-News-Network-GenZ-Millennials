export interface ISource {
  height: number;
  width: number;
  type: 'large' | 'medium' | 'small' | 'xsmall';
  media: string;
  img: string;
}

export class GzmPictureClass {
  private _sources!: ISource[];
  private _defaultSource!: ISource;

  public visible = false;

  setSources(sources: ISource[]) {
    this._sources = sources;
  }

  get sources(): ISource[] {
    return this._sources;
  }

  get defaultSource(): ISource {
    return this._defaultSource;
  }

  setDefaultSource(defaultSource: ISource) {
    this._defaultSource = defaultSource;
  }

  setVisible(visible: boolean) {
    this.visible = visible;
  }
}
