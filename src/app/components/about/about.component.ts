import { Component } from '@angular/core'

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  private readonly _today: Date
  private readonly _firstDayOnJob: Date

  public yearsDeveloping: number

  constructor () {
    this._today = new Date()
    this._firstDayOnJob = new Date('12/17/2018')
    this.yearsDeveloping = this._today.getFullYear() - this._firstDayOnJob.getFullYear()
  }
}
