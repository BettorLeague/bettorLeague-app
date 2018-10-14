import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContestService } from '../../services/bettor/contest.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ContestModel } from '../../models/bettor/contest.model';
import { CompetitionService } from '../../services/bettor/competition.service';
import { CompetitionModel } from '../../models/bettor/competition.model';

@Component({
  selector: 'app-bettor',
  templateUrl: './bettor.page.html',
  styleUrls: ['./bettor.page.scss'],
})
export class BettorPage implements OnInit, OnDestroy {

  selectedContest: ContestModel;
  selectedCompetition: CompetitionModel;
  activeSegment: 'matchs';
  private unsubscribeAll: Subject<any>;

  constructor(
    private contestService: ContestService,
    private competitionService: CompetitionService,
  ) {
    this.unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.contestService.onContestSelected
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        this.selectedContest = res;
      });

    this.competitionService.onCompetitionSelected
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        this.selectedCompetition = res;
      });
  }

  segmentChanged($event) {
    if ($event.detail.value !== this.activeSegment) {
      this.activeSegment = $event.detail.value;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
