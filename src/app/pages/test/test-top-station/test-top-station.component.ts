import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-test-top-station',
  templateUrl: './test-top-station.component.html',
  styleUrls: ['./test-top-station.component.scss'],
})
export class TestTopStationComponent implements OnInit {

  tabList = [
    {
      til: '超速测试',
      route: '/test/testTopStation/testTopSpeeding',
    },
    {
      til: '上站驱动单闸制动测试',
      route: '/test/testTopStation/testTopTopDrive',
    },
    {
      til: '中站驱动单闸制动测试',
      route: '/test/testTopStation/testTopMiddleDrive',
    },
    {
      til: '计数脉冲测试',
      route: '/test/testTopStation/testTopCountPulse',
    },
    {
      til: '抱索力测试',
      route: '/test/testTopStation/testTopCablewayForce',
    },
    {
      til: '高速轮脉冲测试',
      route: '/test/testTopStation/testTopHighPulse',
    },
    {
      til: '低速轮脉冲测试',
      route: '/test/testTopStation/testTopLowPulse',
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
