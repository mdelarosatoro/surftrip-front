import { createAction, props } from '@ngrx/store';
import { SurfcampLoginResponseI } from '../interfaces/surfcamps.interfaces';

export const login = createAction(
    '[Auth] Login',
    props<{ loginResponse: SurfcampLoginResponseI }>()
);

// export const addTask = createAction(
//     '[Task List] Add Task',
//     props<{ task: TaskI }>()
// );

// export const removeTask = createAction(
//     '[Task Collection] Remove Task',
//     props<{ taskId: number }>()
// );

// export const updateTask = createAction(
//     '[Task Collection] Update Task',
//     props<{ task: TaskI }>()
// );

// export const retrievedTaskList = createAction(
//     '[Task List/API] Retrieve Tasks Success',
//     props<{ tasks: ReadonlyArray<TaskI> }>()
// );
