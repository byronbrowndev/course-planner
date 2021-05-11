import { Action, createReducer, on } from "@ngrx/store";
import { Semester } from "src/app/models/Semester.interface";
import * as semesters from './semesters.initial-state';
import * as semesterAction from '../actions/semester.actions'


export const initialState: Semester[] = semesters.initialState;


const myReducer = createReducer(
  initialState,
  on(semesterAction.changeCourse, (semesters, action) => {
      console.log(semesters, action);
      const payload = action.payload;
      return semesters.map((semester: Semester) => {
        if (semester.season === payload.searchInfo.season && semester.year === payload.searchInfo.year) {
          const updatedCourse = { name: payload.courseInfo.name , grade: payload.courseInfo.grade, hours: payload.courseInfo.hours,}
          const newCourses = semester.classes.map((c, i) => i === payload.searchInfo.index ? updatedCourse : c);
          // console.log(newThing)
          return {
            ...semester,
            classes: newCourses
          };
        }
        return semester
      })
  })    
);

export function reducer(state: Semester[] = initialState, action: Action): Semester[] {
  return myReducer(state, action);
}
