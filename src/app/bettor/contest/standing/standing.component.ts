import { Component, OnInit, Input } from '@angular/core';
import { StandingModel } from '../../../../models/bettor/standing.model';

@Component({
  selector: 'contest-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent implements OnInit {

  @Input() standing: StandingModel[];

  constructor() { }

  ngOnInit() {
  }

}
