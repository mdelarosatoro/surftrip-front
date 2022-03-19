import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';

export const selectAuth =
    createFeatureSelector<Readonly<SurfcampLoginResponseI>>('auth');
