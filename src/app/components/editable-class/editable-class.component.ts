import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editable-class',
  templateUrl: './editable-class.component.html',
  styleUrls: ['./editable-class.component.css']
})
export class EditableClassComponent implements OnInit {
  @Input() course: { name: string, hours: number, grade: number };

  constructor() { }

  ngOnInit(): void {
  }

}
