import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photo-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public profilePicture: string | undefined;
  public chrisAndCarlie: string | undefined;
  public familyPhoto: string | undefined;
  public logo: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.profilePicture = "../../../assets/images/LinkedInProfilePicture.jpeg";
    this.chrisAndCarlie = "../../../assets/images/wedding.jpg";
    this.familyPhoto = "../../../assets/images/family.jpg";
    this.logo = "../../../assets/images/cl-black-logo.png";
  }
}
