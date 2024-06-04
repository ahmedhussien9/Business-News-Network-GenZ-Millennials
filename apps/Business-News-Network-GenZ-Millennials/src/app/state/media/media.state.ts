import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { GetMediaDataUseCase } from '../../application/use-cases/get-media-data.use-case';

import {
  LoadMediaData,
  LoadMediaDataSuccess,
  LoadMediaDataFailure,
} from './media.actions';
import { of } from 'rxjs';
import {
  MediaItemType1,
  MediaItemType2,
  MediaItemType3,
  MediaItemType4,
} from '../../domain/models/media';

export interface MediaStateModel {
  type1: MediaItemType1;
  type2: MediaItemType2[];
  type3: MediaItemType3[];
  type4: MediaItemType4[];
  error: any;
}

@State<MediaStateModel>({
  name: 'media',
  defaults: {
    type1: {
      mainFeatureItem: {
        title: '',
        description: '',
        image: '',
        sources: [],
        defaultSource: {
          height: 0,
          width: 0,
          type: '',
          media: '',
          img: '',
        },
      },
      secondFeatureItems: [],
      thirdFeatureItems: [],
    },
    type2: [],
    type3: [],
    type4: [],
    error: null,
  },
})
@Injectable()
export class MediaState {
  constructor(private getMediaDataUseCase: GetMediaDataUseCase) {}

  @Selector()
  static type1Items(state: MediaStateModel): MediaItemType1 {
    return state.type1;
  }

  @Selector()
  static type2Items(state: MediaStateModel): MediaItemType2[] {
    return state.type2;
  }

  @Selector()
  static type3Items(state: MediaStateModel): MediaItemType3[] {
    return state.type3;
  }

  @Selector()
  static type4Items(state: MediaStateModel): MediaItemType4[] {
    return state.type4;
  }

  @Selector()
  static error(state: MediaStateModel): any {
    return state.error;
  }

  @Action(LoadMediaData)
  loadMediaData(ctx: StateContext<MediaStateModel>) {
    return this.getMediaDataUseCase.execute().pipe(
      tap(({ type1, type2, type3, type4 }) =>
        ctx.dispatch(new LoadMediaDataSuccess(type1, type2, type3, type4))
      ),
      catchError((error) => of(ctx.dispatch(new LoadMediaDataFailure(error))))
    );
  }

  @Action(LoadMediaDataSuccess)
  loadMediaDataSuccess(
    ctx: StateContext<MediaStateModel>,
    action: LoadMediaDataSuccess
  ) {
    ctx.patchState({
      type1: action.type1,
      type2: action.type2,
      type3: action.type3,
      type4: action.type4,
      error: null,
    });
  }

  @Action(LoadMediaDataFailure)
  loadMediaDataFailure(
    ctx: StateContext<MediaStateModel>,
    action: LoadMediaDataFailure
  ) {
    ctx.patchState({
      error: action.error,
    });
  }
}
