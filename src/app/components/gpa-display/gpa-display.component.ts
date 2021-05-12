import { Component, Input, OnInit } from '@angular/core';
import { GpaCalculationService } from 'src/app/services/gpaCalculation.service';

@Component({
  selector: 'app-gpa-display',
  templateUrl: './gpa-display.component.html',
  styleUrls: ['./gpa-display.component.css']
})
export class GpaDisplayComponent implements OnInit {
  @Input() title: string;
  @Input() points: number;
  @Input() credits: number;

  gpa: number

  constructor(private gpaCalculationService: GpaCalculationService) { }

  ngOnInit(): void {
    this.gpa = this.gpaCalculationService.currentGpa(this.credits, this.points)
  }

}
