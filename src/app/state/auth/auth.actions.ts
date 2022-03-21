import { createAction, props } from '@ngrx/store';
import {
    SurfcampLoginResponseI,
    SurfcampLogoutI,
} from '../../interfaces/surfcamps.interfaces';

export const login = createAction(
    '[Auth] Login',
    props<{ loginResponse: SurfcampLoginResponseI }>()
);

export const logout = createAction(
    '[Auth] Logout',
    props<{ logout: SurfcampLogoutI }>()
);
