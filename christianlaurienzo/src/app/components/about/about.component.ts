import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private _today: Date | undefined;
  private _firstDayOnJob: Date | undefined;

  public yearsDeveloping: number| undefined;

  constructor() { }

  ngOnInit(): void {
    this._today = new Date(); 
    this._firstDayOnJob = new Date("12/17/2018");
    this.yearsDeveloping = this._today.getFullYear() - this._firstDayOnJob.getFullYear();
  }

}
