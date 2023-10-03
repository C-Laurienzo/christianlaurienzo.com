import { Component } from '@angular/core'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public logo: string

  constructor () {
    this.logo = 'https://image.christianlaurienzo.com/cl-black-logo.png'
  }
}
