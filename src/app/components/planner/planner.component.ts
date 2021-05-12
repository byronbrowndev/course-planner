import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Semester } from 'src/app/models/Semester.interface';
import { GpaCalculationService } from 'src/app/services/gpaCalculation.service';
import { AppState } from 'src/app/store/reducers';
import { changeCourse } from '../../store/actions/semester.actions';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  amendedAccumulativeGpa: number;
  projectedFinalAccumulativeGpa: number;

  semester$: Observable<Semester[]>
  point$: Observable<number>;
  credit$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.semester$ = this.store.select((state: AppState) => state.semesters);
    // will be from state
    this.point$ = of((239-17));
    this.credit$ = of((105-26));
  }

}
