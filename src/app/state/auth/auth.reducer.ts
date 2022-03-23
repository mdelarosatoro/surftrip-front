import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampLoginResponseI } from '../../interfaces/surfcamps.interfaces';
import { login, logout, updateUserData } from './auth.actions';

export const initialState: Readonly<
    SurfcampLoginResponseI | UserLoginResponseI
> = {
    token: '',
    id: '',
    name: '',
    username: '',
    email: '',
    profilePicUrl: '',
    role: '',
};

export const authReducer = createReducer(
    initialState,
    on(login, (state, { loginResponse }) => loginResponse),
    on(updateUserData, (state, { newUserData }) => {
        return { ...state, ...newUserData };
    }),
    on(logout, (state, { logout }) => initialState)
);
