import { createReducer, on } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';
import { loadPackages } from './packages.actions';

export const initialState: ReadonlyArray<PackageI> = [];

export const packagesReducer = createReducer(
    initialState,
    on(loadPackages, (state, { packages }) => packages)
);
