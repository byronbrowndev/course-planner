import { createAction } from '@ngrx/store';

export interface changeCouseInfo {
    searchInfo: {
        season: string,
        year: string,
        index: number,
    },
    courseInfo: {
        grade: number,
        name: string,
        hours: number
    }
    
}

export const changeCourse = createAction('[Semester] Change Grade', (course: changeCouseInfo) => ({ payload: course}));