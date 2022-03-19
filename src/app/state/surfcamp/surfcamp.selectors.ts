import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';

export const selectSurfcamp =
    createFeatureSelector<Readonly<SurfcampI>>('surfcamp');
