import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpa-display',
  templateUrl: './gpa-display.component.html',
  styleUrls: ['./gpa-display.component.css']
})
export class GpaDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() gpa: number;

  constructor() { }

  ngOnInit(): void {
  }

}
