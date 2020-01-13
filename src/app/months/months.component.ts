import { Component, OnInit } from '@angular/core';
import { months } from '../birthdays'

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {
  months = months;

  constructor() { }

  ngOnInit() {
  }

}