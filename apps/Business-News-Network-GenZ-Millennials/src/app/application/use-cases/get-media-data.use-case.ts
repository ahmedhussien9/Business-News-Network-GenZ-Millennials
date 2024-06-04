import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { MediaRepository } from '../../domain/repositories/media.repository';
import { MEDIA_REPOSITORY_TOKEN } from '../../domain/tokens/media-repository.token';
import {
  MediaItemType1,
  MediaItemType2,
  MediaItemType3,
  MediaItemType4,
} from '../../domain/models/media';

@Injectable({
  providedIn: 'root',
})
export class GetMediaDataUseCase {
  constructor(
    @Inject(MEDIA_REPOSITORY_TOKEN) private mediaRepository: MediaRepository
  ) {}

  execute(): Observable<{
    type1: MediaItemType1;
    type2: MediaItemType2[];
    type3: MediaItemType3[];
    type4: MediaItemType4[];
  }> {
    return this.mediaRepository.getMediaData();
  }
}
