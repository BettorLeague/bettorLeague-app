import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() switchContestType = 'public';
  searchText: string;
  @Output() publicContestLengthEvent = new EventEmitter<number>();
  @Output() privateContestLengthEvent = new EventEmitter<number>();

  constructor(private userService: UserService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.userService.onPublicContestUpdated
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((contests) => {
      this.publicContests = contests;
      this.publicContestLengthEvent.emit(contests.length);
    });

    this.userService.onPrivateContestUpdated
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((contests) => {
      this.privateContests = contests;
      this.privateContestLengthEvent.emit(contests.length);
    });
  }

  quitContest(contestId: string, slidingItem: ItemSliding) {
    this.userService.unSubscribeToContest(contestId).then(() => {
      slidingItem.close();
    });
  }

}
