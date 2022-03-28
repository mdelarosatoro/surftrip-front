import { createReducer, on } from '@ngrx/store';
import { SurfcampI } from '../../interfaces/surfcamps.interfaces';
import {
    addPackage,
    addPhoto,
    deletePackage,
    deletePhoto,
    loadSurfcamp,
    udpatePackage,
    updateSurfcamp,
} from './surfcamp.actions';

export const initialState: Readonly<SurfcampI> = {
    _id: '',
    email: '',
    username: '',
    name: '',
    rating: '',
    packages: [],
    role: '',
    photos: [],
    skillLevels: [],
    location: [],
    description: '',
    comments: [],
    customers: [],
};

export const surfcampReducer = createReducer(
    initialState,
    on(loadSurfcamp, (state, { surfcamp }) => surfcamp),
    on(addPackage, (state, { newPackage }) => ({
        ...state,
        packages: state.packages && [...state.packages, newPackage],
    })),
    on(udpatePackage, (state, { updatedPackage }) => {
        return {
            ...state,
            packages:
                state.packages &&
                state.packages.map((item) =>
                    item._id === updatedPackage._id ? updatedPackage : item
                ),
        };
    }),
    on(deletePackage, (state, { packageId }) => {
        return {
            ...state,
            packages:
                state.packages &&
                state.packages.filter((item) => item._id !== packageId),
        };
    }),
    on(updateSurfcamp, (state, { updatedSurfcamp }) => ({
        ...state,
        ...updatedSurfcamp,
    })),
    on(addPhoto, (state, { newPhotosArr }) => ({
        ...state,
        photos: [...newPhotosArr],
    })),
    on(deletePhoto, (state, { newPhotosArr }) => ({
        ...state,
        photos: [...newPhotosArr],
    }))
);
