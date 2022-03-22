import { createAction, props } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import {
    SurfcampLoginResponseI,
    SurfcampLogoutI,
} from '../../interfaces/surfcamps.interfaces';

export const login = createAction(
    '[Auth] Login',
    props<{ loginResponse: SurfcampLoginResponseI | UserLoginResponseI }>()
);

export const logout = createAction(
    '[Auth] Logout',
    props<{ logout: SurfcampLogoutI }>()
);
