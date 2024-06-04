import { Observable } from 'rxjs';
import {
  MediaItemType1,
  MediaItemType2,
  MediaItemType3,
  MediaItemType4,
} from '../models/media';

export interface MediaRepository {
  getMediaData(): Observable<{
    type1: MediaItemType1;
    type2: MediaItemType2[];
    type3: MediaItemType3[];
    type4: MediaItemType4[];
  }>;
}
