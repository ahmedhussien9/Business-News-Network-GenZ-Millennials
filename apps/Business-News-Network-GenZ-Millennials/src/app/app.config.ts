import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { MediaState } from './state/media/media.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MediaRepositoryImpl } from './infrastructure/repositories/media.repository.impl';
import { GetMediaDataUseCase } from './application/use-cases/get-media-data.use-case';
import { MEDIA_REPOSITORY_TOKEN } from './domain/tokens/media-repository.token';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    { provide: MEDIA_REPOSITORY_TOKEN, useClass: MediaRepositoryImpl },
    GetMediaDataUseCase,
    importProvidersFrom(
      NgxsLoggerPluginModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsModule.forRoot([MediaState], {
        developmentMode: true,
      })
    ),
  ],
};
