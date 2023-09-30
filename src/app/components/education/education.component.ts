import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public kentLogo: string | undefined;
  public tricLogo: string | undefined;
  public brushLogo: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.kentLogo = "../../../assets/images/ksuLogo.svg.png";
    this.tricLogo = "../../../assets/images/tricLogo.png";
    this.brushLogo = "../../../assets/images/brushLogo.png";
  }
}
