import { Course } from "./Course.interface";

export interface Semester {
    season: string, //Spring SUmmer Fall
    year: string,
    courses: Course[];
  }