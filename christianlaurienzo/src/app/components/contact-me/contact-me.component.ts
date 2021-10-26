import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  public phoneNumber: string | undefined;
  public email: string | undefined;
  public linkedIn: string | undefined;
  public gitHub: string | undefined;
  public resume: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.phoneNumber = "2169901711";
    this.email = "christian.laurienzo@gmail.com";
    this.linkedIn = "https://www.linkedin.com/in/christian-laurienzo-71b43260/";
    this.gitHub = "https://github.com/C-Laurienzo";
    this.resume = "../../../assets/Resume.pdf"  
  }
}
