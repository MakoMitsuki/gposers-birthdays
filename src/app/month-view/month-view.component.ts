import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { months } from '../birthdays';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {
  month;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.month = months[+params.get('index')];
    });
  }

}