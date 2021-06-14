import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent implements OnInit {
  tabList = [
    {
      til: '上站',
      route: '/test/testTopStation',
    },
    {
      til: '中间站',
      route: '/test/testMiddleStation',
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

