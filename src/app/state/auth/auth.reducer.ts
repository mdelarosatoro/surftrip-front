import { createReducer, on } from '@ngrx/store';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';
import { login, logout } from './auth.actions';

export const initialState: Readonly<SurfcampLoginResponseI> = {
    token: '',
    id: '',
    name: '',
    username: '',
    role: '',
};

export const authReducer = createReducer(
    initialState,
    on(login, (state, { loginResponse }) => loginResponse),
    on(logout, (state, { logout }) => initialState)
);
