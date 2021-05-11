import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/Course.interface';
import { changeCourse } from 'src/app/store/actions/semester.actions';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-editable-class',
  templateUrl: './editable-class.component.html',
  styleUrls: ['./editable-class.component.css']
})
export class EditableClassComponent implements OnInit {
  @Input() course: Course;
  @Input() semester: [string, string];
  @Input() index: number

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onChange(grade, hours, name) {
    const thing = {
      searchInfo: {
        season: this.semester[0],
        year: this.semester[1],
        index: this.index
      },
      courseInfo: {
        grade,
        hours,
        name
      }
    }
    console.log(thing);
    this.store.dispatch(changeCourse(thing))
  }

}
