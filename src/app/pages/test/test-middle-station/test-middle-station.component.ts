import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-test-middle-station',
  templateUrl: './test-middle-station.component.html',
  styleUrls: ['./test-middle-station.component.scss'],
})
export class TestMiddleStationComponent implements OnInit {

  tabList = [
    {
      til: '上段张紧测试',
      route: '/test/testMiddleStation/testMiddleBottomTension',
    },
    {
      til: '下段张紧测试',
      route: '/test/testMiddleStation/testMiddleMiddleTension',
    },
    {
      til: '计数脉冲测试',
      route: '/test/testMiddleStation/testMiddleCountPulse',
    },
    {
      til: '抱索力测试',
      route: '/test/testMiddleStation/testMiddleCablewayForce',
    },
    {
      til: '高速轮脉冲测试',
      route: '/test/testMiddleStation/testMiddleHighPulse',
    },
    {
      til: '低速轮脉冲测试',
      route: '/test/testMiddleStation/testMiddleLowPulse',
    },
  ];

  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
