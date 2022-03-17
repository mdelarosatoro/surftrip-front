import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';

export interface AppState {
    auth: Readonly<SurfcampLoginResponseI>;
}
