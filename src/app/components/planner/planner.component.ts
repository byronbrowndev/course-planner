import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {
  currentAccumulativeGpa = 2.3333333;
  amendedAccumulativeGpa = 2.8133333;
  projectedFinalAccumulativeGpa = 3.233333;
  
  semesters = [
    {
      name: 'Spring',
      year: '2021',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Summer',
      year: '2021',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Fall',
      year: '2021',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Spring',
      year: '2022',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Summer',
      year: '2022',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Fall',
      year: '2022',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    },
    {
      name: 'Spring',
      year: '2023',
      classes: [
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 },
        { name: '', hours: 3, grade: 4 }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
