import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-global',
  template: `
    <p>
      some-global works!
    </p>
  `,
  styles: [
  ]
})
export class SomeGlobalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
