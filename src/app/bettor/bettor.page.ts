import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContestService } from '../../services/bettor/contest.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ContestModel } from '../../models/bettor/contest.model';

@Component({
  selector: 'app-bettor',
  templateUrl: './bettor.page.html',
  styleUrls: ['./bettor.page.scss'],
})
export class BettorPage implements OnInit, OnDestroy {

  selectedContest: ContestModel;

  private unsubscribeAll: Subject<any>;

  constructor(private contestService: ContestService) {
    this.unsubscribeAll = new Subject();
   }

  ngOnInit(): void {
    this.contestService.onContestSelected
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(res => {
        this.selectedContest = res;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
