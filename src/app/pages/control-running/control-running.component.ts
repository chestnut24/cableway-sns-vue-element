import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-running',
  templateUrl: './control-running.component.html',
  styleUrls: ['./control-running.component.scss']
})
export class ControlRunningComponent implements OnInit {

  tabList = [
    {
      til: '上站驱动',
      route: '/controlRunning/topDrive',
    },
    {
      til: '中站驱动',
      route: '/controlRunning/middleDrive',
    },
    {
      til: '中站迂回',
      route: '/controlRunning/middleAround',
    },
    {
      til: '下站迂回',
      route: '/controlRunning/bottomAround',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
