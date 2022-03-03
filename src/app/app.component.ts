import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-app';
  name = 'Boris';
  today = new Date();
  imgUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
  color = 'blue';
  state = false;
  fruits = ['orange', 'banana', 'apple']

  clickMe(event: MouseEvent): void {
    console.log('event receveid', event);
  }

  toggleState(): void {
    this.state = !this.state;
  }
}
