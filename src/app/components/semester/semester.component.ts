import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  @Input() semester: {name: string, year: string, classes: number};

  constructor() { }

  ngOnInit(): void {
  }

}
