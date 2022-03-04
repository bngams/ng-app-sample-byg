import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  id!: number;

  constructor(route: ActivatedRoute) {
    this.id = parseInt(route.snapshot.paramMap.get('id') || "0");
    console.log(this.id);
  }

  ngOnInit(): void {
  }

}
