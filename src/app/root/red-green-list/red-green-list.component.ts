import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-red-green-list',
  templateUrl: './red-green-list.component.html',
  styleUrls: ['./red-green-list.component.scss']
})
export class RedGreenListComponent implements OnInit {
  @Input() name;
  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
