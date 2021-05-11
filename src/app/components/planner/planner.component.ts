import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  constructor(private store: Store, private gpaCalculationService: GpaCalculationService) { }

  ngOnInit(): void {
    this.semester$ = this.store.select((state: AppState) => state.semesters);
    // this.amendedAccumulativeGpa = gp

  }

}
