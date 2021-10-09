import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private _today: Date = new Date();
  private _firstDayOnJob: Date = new Date("12/17/2018");

  public yearsDeveloping: number = this._today.getFullYear() - this._firstDayOnJob.getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
