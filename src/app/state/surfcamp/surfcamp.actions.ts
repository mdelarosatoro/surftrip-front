import { createAction, props } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';

export const loadSurfcamp = createAction(
    '[Surfcamp] Load',
    props<{ surfcamp: Readonly<SurfcampI> }>()
);
