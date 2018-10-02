import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserModel } from '../../../../../models/user.model';
import { Subject } from 'rxjs';
import { UserService } from '../../../../../services/user/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profil-menu',
  templateUrl: './profil-menu.component.html',
  styleUrls: ['./profil-menu.component.scss']
})
export class ProfilMenuComponent implements OnInit, OnDestroy {

  user: UserModel;
  private unsubscribeAll: Subject<any>;

  constructor(private menuCtrl: MenuController, private userService: UserService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.userService.onUserUpdated
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe(user => {
      if (user) {
        this.user = user;
      }
      console.log(user);
    });
  }

  closeProfil() {
    this.menuCtrl.close('profil').then(() => {
      this.menuCtrl.enable(false, 'profil');
      this.menuCtrl.enable(true, 'main');
      this.menuCtrl.open('main');
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
