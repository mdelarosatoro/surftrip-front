import { createReducer, on } from '@ngrx/store';
import { SurfcampI } from '../../interfaces/surfcamps.interfaces';
import { loadSurfcamp } from './surfcamp.actions';

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
    on(loadSurfcamp, (state, { surfcamp }) => surfcamp)
);
