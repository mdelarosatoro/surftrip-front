import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserI } from 'src/app/interfaces/users.interfaces';

export const selectUser = createFeatureSelector<Readonly<UserI>>('user');
