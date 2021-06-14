import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-speed-electricity',
  templateUrl: './speed-electricity.component.html',
  styleUrls: ['./speed-electricity.component.scss']
})
export class SpeedElectricityComponent implements OnInit {

  tabList = [
    {
      til: '上站主电机',
      route: '/speedElectricity/speedElectTopStation',
    },
    {
      til: '中间站主电机',
      route: '/speedElectricity/speedElectMidStation',
    },
  ];


  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

}
