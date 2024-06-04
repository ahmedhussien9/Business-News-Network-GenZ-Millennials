import {
  MediaItemType1,
  MediaItemType2,
  MediaItemType3,
  MediaItemType4,
} from '../../domain/models/media';

export class LoadMediaData {
  static readonly type = '[Media] Load Media Data';
}

export class LoadMediaDataSuccess {
  static readonly type = '[Media] Load Media Data Success';
  constructor(
    public type1: MediaItemType1,
    public type2: MediaItemType2[],
    public type3: MediaItemType3[],
    public type4: MediaItemType4[]
  ) {}
}

export class LoadMediaDataFailure {
  static readonly type = '[Media] Load Media Data Failure';
  constructor(public error: any) {}
}
