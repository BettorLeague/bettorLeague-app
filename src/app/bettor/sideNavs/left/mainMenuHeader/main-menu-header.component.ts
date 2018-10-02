import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';
import { LoadingController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../../../../services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { UserModel } from '../../../../../models/user.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'main-menu-header',
  templateUrl: './main-menu-header.component.html',
  styleUrls: ['./main-menu-header.component.scss']
})
export class MainMenuHeaderComponent implements OnInit, OnDestroy {

  searchText: string;
  user: UserModel;
  private unsubscribeAll: Subject<any>;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private menuCtrl: MenuController,
    private userService: UserService
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.userService.onUserUpdated
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Deconnexion en cours...',
      duration: 1000
    });
    return await loading.present();
  }

  logOut() {
    this.authService.logout();
    this.presentLoading().then(() => {
      this.router.navigate(['auth/login']);
    });
  }

  openProfil() {
    this.menuCtrl.close('main').then(() => {
      this.menuCtrl.enable(false, 'main');
      this.menuCtrl.enable(true, 'profil');
      this.menuCtrl.toggle('profil');
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
