import { createReducer, on } from '@ngrx/store';
import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';
import { login } from './auth.actions';

export const initialState: Readonly<SurfcampLoginResponseI> = {
    token: '',
    id: '',
    name: '',
    username: '',
    role: '',
};

export const authReducer = createReducer(
    initialState,
    on(login, (state, { loginResponse }) => loginResponse)
    // on(retrievedTaskList, (state, { tasks }) => tasks),
    // on(removeTask, (state, { taskId }) =>
    //     state.filter((task) => task.id !== taskId)
    // ),
    // on(addTask, (state, { task }) => {
    //     return [...state, task];
    // }),
    // on(updateTask, (state, { task }) =>
    //     state.map((item) => (item.id === task.id ? task : item))
    // )
);
