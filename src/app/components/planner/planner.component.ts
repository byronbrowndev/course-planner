import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Semester } from 'src/app/models/Semester.interface';
import { AppState } from 'src/app/store/reducers';
import { changeCourse } from '../../store/actions/semester.actions';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  currentAccumulativeGpa = 2.3333333;
  amendedAccumulativeGpa = 2.8133333;
  projectedFinalAccumulativeGpa = 3.233333;

  semester$: Observable<Semester[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.semester$ = this.store.select((state: AppState) => state.semesters )
  }

}
