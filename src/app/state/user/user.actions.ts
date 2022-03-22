import { createAction, props } from '@ngrx/store';
import { UserI } from 'src/app/interfaces/users.interfaces';

export const loadUser = createAction(
    '[User] Load',
    props<{ user: Readonly<UserI> }>()
);

// export const udpatePackage = createAction(
//     '[Surfcamp] Update Package',
//     props<{ updatedPackage: Readonly<PackageI> }>()
// );

// export const updateSurfcamp = createAction(
//     '[Surfcamp] Update Surfcamp',
//     props<{ updatedSurfcamp: Readonly<SurfcampI> }>()
// );

// export const addPhoto = createAction(
//     '[Surfcamp] Add Photo',
//     props<{ newPhotosArr: ReadonlyArray<PhotoI> }>()
// );

// export const deletePhoto = createAction(
//     '[Surfcamp] Delete Photo',
//     props<{ newPhotosArr: ReadonlyArray<PhotoI> }>()
// );
