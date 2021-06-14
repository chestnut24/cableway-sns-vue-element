import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-drive-auxiliary-machine',
  templateUrl: './drive-auxiliary-machine.component.html',
  styleUrls: ['./drive-auxiliary-machine.component.scss']
})
export class DriveAuxiliaryMachineComponent implements OnInit {
  typeTop = 'primary';
  typeMid = 'default';
  constructor(
      public router: Router,
  ) { }

  ngOnInit() {
  }
  goTop() {
    this.router.navigate(['/driveAuxiliary/topStation']);
    this.typeTop = 'primary';
    this.typeMid = 'default';
  }
  goMid() {
    this.router.navigate(['/driveAuxiliary/midStation']);
    this.typeMid = 'primary';
    this.typeTop = 'default';
  }

}
