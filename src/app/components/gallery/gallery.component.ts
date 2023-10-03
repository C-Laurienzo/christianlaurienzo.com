import { Component } from '@angular/core'

@Component({
  selector: 'photo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public profilePicture: string
  public logo: string

  constructor () {
    this.profilePicture = 'https://image.christianlaurienzo.com/profile.jpeg'
    this.logo = 'https://image.christianlaurienzo.com/cl-black-logo.png'
  }
}
