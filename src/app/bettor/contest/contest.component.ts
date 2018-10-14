import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ContestModel } from '../../../models/bettor/contest.model';
import { PlayerModel } from '../../../models/bettor/player.model';
import { MessageModel } from '../../../models/bettor/message.model';
import { CompetitionModel } from '../../../models/bettor/competition.model';
import { StandingModel } from '../../../models/bettor/standing.model';
import { TeamModel } from '../../../models/bettor/team.model';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnChanges {

  @Input() selectedContest: {
    contestInfo: ContestModel,
    contestMessage: MessageModel[],
    contestPlayer: PlayerModel[],
  };
  contest: ContestModel;
  contestPlayer: PlayerModel[];
  contestMessage: MessageModel[];

  @Input() selectedCompetition: {
    competitionInfo: CompetitionModel,
    competitionStanding: StandingModel[],
    competitionTeam: TeamModel[],
  };
  competition: CompetitionModel;
  competitionStanding: StandingModel[];


  @Input() activeSegment: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.selectedContest != null &&
      JSON.stringify(changes.selectedContest.currentValue) !== JSON.stringify(changes.selectedContest.previousValue)
    ) {
      this.contest = changes.selectedContest.currentValue.contestInfo;
      this.contestPlayer = changes.selectedContest.currentValue.contestPlayer;
      this.contestMessage = changes.selectedContest.currentValue.contestMessage;
    }

    if (
      changes.selectedCompetition != null &&
      changes.selectedCompetition.currentValue != null &&
      JSON.stringify(changes.selectedCompetition.currentValue) !== JSON.stringify(changes.selectedCompetition.previousValue)
    ) {
      this.competition = changes.selectedCompetition.currentValue.competitionInfo;
      this.competitionStanding = changes.selectedCompetition.currentValue.competitionStanding;
    }
  }

  segmentChanged($event) {
    if ($event.detail.value !== this.activeSegment) {
      this.activeSegment = $event.detail.value;
    }
  }

}
