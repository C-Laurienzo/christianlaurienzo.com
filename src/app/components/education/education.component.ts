import { Component } from '@angular/core'

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  public kentLogo: string
  public tricLogo: string
  public brushLogo: string

  constructor () {
    this.kentLogo = 'https://image.christianlaurienzo.com/ksu-logo.svg.png'
    this.tricLogo = 'https://image.christianlaurienzo.com/tric-logo.png'
    this.brushLogo = 'https://image.christianlaurienzo.com/brush-logo.png'
  }
}
