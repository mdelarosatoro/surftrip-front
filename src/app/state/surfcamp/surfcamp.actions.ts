import { createAction, props } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';
import { PhotoI } from 'src/app/interfaces/photos.interfaces';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';

export const loadSurfcamp = createAction(
    '[Surfcamp] Load',
    props<{ surfcamp: Readonly<SurfcampI> }>()
);

export const addPackage = createAction(
    '[Surfcamp] Add Package',
    props<{ newPackage: Readonly<PackageI> }>()
);

export const udpatePackage = createAction(
    '[Surfcamp] Update Package',
    props<{ updatedPackage: Readonly<PackageI> }>()
);

export const deletePackage = createAction(
    '[Surfcamp] Delete Package',
    props<{ packageId: Readonly<string> }>()
);

export const updateSurfcamp = createAction(
    '[Surfcamp] Update Surfcamp',
    props<{ updatedSurfcamp: Readonly<SurfcampI> }>()
);

export const addPhoto = createAction(
    '[Surfcamp] Add Photo',
    props<{ newPhotosArr: ReadonlyArray<PhotoI> }>()
);

export const deletePhoto = createAction(
    '[Surfcamp] Delete Photo',
    props<{ newPhotosArr: ReadonlyArray<PhotoI> }>()
);
