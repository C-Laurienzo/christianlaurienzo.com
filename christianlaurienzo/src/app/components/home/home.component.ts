import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public logo: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.logo = "../../../assets/images/cl-black-logo.png";
  }
}
