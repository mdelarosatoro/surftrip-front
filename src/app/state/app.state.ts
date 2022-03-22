import { PackageI } from '../interfaces/packages.interfaces';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from '../interfaces/surfcamps.interfaces';
import { UserI } from '../interfaces/users.interfaces';

export interface AppState {
    auth: Readonly<SurfcampLoginResponseI>;
    surfcamp: Readonly<SurfcampI>;
    user: Readonly<UserI>;
}
