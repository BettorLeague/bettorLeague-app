import { Component, OnInit, Input } from '@angular/core';
import { PlayerModel } from '../../../../models/bettor/player.model';

@Component({
  selector: 'contest-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  @Input() players: PlayerModel[];

  constructor() { }

  ngOnInit() {
  }

}
