import { Component } from '@angular/core'

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public capitalOne: string
  public yardi: string
  public aws: string
  public isShow: boolean

  constructor () {
    this.capitalOne = 'https://www.capitalone.com'
    this.yardi = 'https://www.yardi.com/'
    this.aws = 'https://aw.certmetrics.com/amazon/public/verification.aspx'
    this.isShow = false
  }
}
