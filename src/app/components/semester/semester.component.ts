import { Component, Input, OnInit } from '@angular/core';
import { Semester } from 'src/app/models/Semester.interface';

@Component({
  selector: 'app-semester',
  templateUrl: './semester.component.html',
  styleUrls: ['./semester.component.css']
})
export class SemesterComponent implements OnInit {
  @Input() semester: Semester;

  constructor() { }

  ngOnInit(): void {
  }

}
