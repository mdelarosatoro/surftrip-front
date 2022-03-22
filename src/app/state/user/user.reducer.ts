import { createReducer, on } from '@ngrx/store';
import { UserI } from 'src/app/interfaces/users.interfaces';
import { SurfcampI } from '../../interfaces/surfcamps.interfaces';
import { loadUser } from './user.actions';

export const initialState: Readonly<UserI> = {
    _id: '',
    bookings: [],
    role: '',
    lastName: '',
    name: '',
    username: '',
    email: '',
    profilePicUrl: '',
};

export const userReducer = createReducer(
    initialState,
    on(loadUser, (state, { user }) => user)
);
