import { ActionReducerMap } from '@ngrx/store';
import { Semester } from 'src/app/models/Semester.interface';
import { reducer as semesterReducer } from './semester.reducer';
// This is for TypeScript. It just let's it know what is going on. None of this creates JavaScript
export interface AppState {
  semesters: Semester[]
}




export const reducers: ActionReducerMap<AppState> = {
  semesters: semesterReducer
}