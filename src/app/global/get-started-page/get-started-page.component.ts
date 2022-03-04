import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-page',
  templateUrl: './get-started-page.component.html',
  styleUrls: ['./get-started-page.component.scss']
})
export class GetStartedPageComponent implements OnInit {
  title = 'ng-app';
  name = 'Boris';
  today = new Date();
  imgUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  color = 'blue';
  state = false;
  fruits = ['orange', 'banana', 'apple']

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(event: MouseEvent): void {
    console.log('event receveid', event);
  }

  toggleState(): void {
    this.state = !this.state;
  }
}
