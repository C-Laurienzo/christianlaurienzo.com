import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public yardi: string | undefined;
  public metroParks: string | undefined;
  public ksuDining: string | undefined;
  public isShow: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.yardi = "https://www.yardi.com/";
    this.metroParks = "https://www.clevelandmetroparks.com/parks/visit/parks/huntington-reservation";
    this.ksuDining = "https://www.kent.edu/housing/dining-services";
    this.isShow = false;
  }
}
