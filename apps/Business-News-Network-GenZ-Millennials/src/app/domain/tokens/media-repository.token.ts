import { InjectionToken } from '@angular/core';
import { MediaRepository } from '../repositories/media.repository';

export const MEDIA_REPOSITORY_TOKEN = new InjectionToken<MediaRepository>(
  'MediaRepository'
);
