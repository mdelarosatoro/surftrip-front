import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';

export const selectPackages =
    createFeatureSelector<Readonly<PackageI>>('packages');
