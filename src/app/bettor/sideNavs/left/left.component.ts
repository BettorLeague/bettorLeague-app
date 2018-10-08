import { Component, OnInit } from '@angular/core';
import { UserContestsComponent } from './user-contests/user-contests.component';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  switchContestType = 'public';
  publicContestsLength = 0;
  privateContestsLength = 0;

  constructor() { }

  ngOnInit() {
  }

  receivePublicContestsLength($event) {
    this.publicContestsLength = $event;
  }

  receivePrivateContestsLength($event) {
    this.privateContestsLength = $event;
  }

  segmentChanged(ev: any) {
    this.switchContestType = ev.detail.value;
  }
}
