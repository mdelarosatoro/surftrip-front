import { createReducer, on } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';
import { login, logout } from './auth.actions';

export const initialState: Readonly<
    SurfcampLoginResponseI | UserLoginResponseI
> = {
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
