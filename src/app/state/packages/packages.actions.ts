import { createAction, props } from '@ngrx/store';
import { PackageI } from 'src/app/interfaces/packages.interfaces';

export const loadPackages = createAction(
    '[Packages] Load',
    props<{ packages: ReadonlyArray<PackageI> }>()
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
