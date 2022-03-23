import { createAction, props } from '@ngrx/store';
import { UserI, UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import {
    SurfcampLoginResponseI,
    SurfcampLogoutI,
} from '../../interfaces/surfcamps.interfaces';

export const login = createAction(
    '[Auth] Login',
    props<{ loginResponse: SurfcampLoginResponseI | UserLoginResponseI }>()
);

export const updateUserData = createAction(
    '[Auth] Update User Data',
    props<{ newUserData: UserI }>()
);

export const logout = createAction(
    '[Auth] Logout',
    props<{ logout: SurfcampLogoutI }>()
);
