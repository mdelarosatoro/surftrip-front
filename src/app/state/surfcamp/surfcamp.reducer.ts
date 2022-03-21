import { createReducer, on } from '@ngrx/store';
import { SurfcampI } from '../../interfaces/surfcamps.interfaces';
import {
    addPhoto,
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
    location: '',
    description: '',
    comments: [],
    customers: [],
};

export const surfcampReducer = createReducer(
    initialState,
    on(loadSurfcamp, (state, { surfcamp }) => surfcamp),
    on(udpatePackage, (state, { updatedPackage }) => {
        return {
            ...state,
            packages: state.packages.map((item) =>
                item._id === updatedPackage._id ? updatedPackage : item
            ),
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
