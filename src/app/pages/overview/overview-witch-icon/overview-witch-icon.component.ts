import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview-witch-icon',
  templateUrl: './overview-witch-icon.component.html',
  styleUrls: ['./overview-witch-icon.component.scss']
})
export class OverviewWitchIconComponent implements OnInit {
  @Input() left;
  @Input() mid;
  @Input() right;
  constructor() { }

  ngOnInit() {
  }

}
