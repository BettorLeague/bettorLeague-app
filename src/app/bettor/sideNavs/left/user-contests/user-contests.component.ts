import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user/user.service';
import { ContestModel } from '../../../../../models/bettor/contest.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemSliding } from '@ionic/angular';

@Component({
  selector: 'user-contests',
  templateUrl: './user-contests.component.html',
  styleUrls: ['./user-contests.component.scss']
})
export class UserContestsComponent implements OnInit {

  publicContests: ContestModel[] = [];
  privateContests: ContestModel[] = [];
  private unsubscribeAll: Subject<any>;
  switchContestType = 'public';

  constructor(private userService: UserService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.userService.onPublicContestUpdated
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((contests) => {
      this.publicContests = contests;
    });

    this.userService.onPrivateContestUpdated
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((contests) => {
      this.privateContests = contests;
    });
  }

  segmentChanged(ev: any) {
    this.switchContestType = ev.detail.value;
  }

  quitContest(contestId: string, slidingItem: ItemSliding) {
    slidingItem.close();
    this.userService.unSubscribeToContest(contestId);
  }

}
