import { PackageI } from '../interfaces/packages.interfaces';
import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';

export interface AppState {
    auth: Readonly<SurfcampLoginResponseI>;
    packages: ReadonlyArray<PackageI>;
}
