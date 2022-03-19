import { createAction, props } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';

export const loadSurfcamp = createAction(
    '[Surfcamp] Load',
    props<{ surfcamp: Readonly<SurfcampI> }>()
);

export const udpatePackage = createAction(
    '[Surfcamp] Update',
    props<{ updatedPackage: Readonly<PackageI> }>()
);
