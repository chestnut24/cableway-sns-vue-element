import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-temperature-page',
  templateUrl: './temperature-page.component.html',
  styleUrls: ['./temperature-page.component.scss']
})
export class TemperaturePageComponent implements OnInit {
  typeTop = 'primary';
  typeMid = 'default';
  constructor(
      public  router: Router
  ) { }

  ngOnInit() {
  }
  goTop() {
    this.router.navigate(['/temperature/topStation']);
    this.typeTop = 'primary';
    this.typeMid = 'default';
  };
  goMid() {
    this.router.navigate(['/temperature/midStation']);
    this.typeMid = 'primary';
    this.typeTop = 'default';
  }

}
