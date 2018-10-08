import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';
import { LoadingController, MenuController, ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../../../../services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { UserModel } from '../../../../../models/user.model';
import { Subject } from 'rxjs';
import { ContestService } from '../../../../../services/bettor/contest.service';

@Component({
  selector: 'main-menu-header',
  templateUrl: './main-menu-header.component.html',
  styleUrls: ['./main-menu-header.component.scss']
})
export class MainMenuHeaderComponent implements OnInit, OnDestroy {

  searchText: string;
  user: UserModel;
  contestActionSheetButtons = [];
  private unsubscribeAll: Subject<any>;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private menuCtrl: MenuController,
    private userService: UserService,
    private actionSheetCtrl: ActionSheetController,
    private contestService: ContestService,
    private toastCtrl: ToastController,
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

    this.contestService.getContest('PUBLIC').subscribe(publicContests => {
      for (const contest in publicContests) {
        if (publicContests.hasOwnProperty(contest)) {
          const contestObj = {
            text: publicContests[contest].caption,
            handler: () => {
              this.joinContest(publicContests[contest].id, publicContests[contest].caption);
            }
          };

          this.contestActionSheetButtons.push(contestObj);
        }
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

  async presentContestActionSheet() {
    this.menuCtrl.toggle('main');
    const contestActionSheet = await this.actionSheetCtrl.create({
      header: 'Concours Public',
      subHeader: 'Selectionner un concours public pour vous inscrire',
      buttons: this.contestActionSheetButtons,
    });

    await contestActionSheet.present();
  }

  async presentToast(message: string, toastType: string = 'success') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: toastType === 'success' ? 'toastSuccess' : 'toastError',
      mode: 'ios',
    });
    toast.present();
  }

  logOut() {
    this.authService.logout();
    this.presentLoading().then(() => {
      this.router.navigate(['auth/login']);
    });
  }

  openProfil() {
    this.menuCtrl.toggle('main').then(() => {
      this.menuCtrl.enable(false, 'main');
      this.menuCtrl.enable(true, 'profil');
      this.menuCtrl.toggle('profil');
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  joinContest(contestId: string, contestName: string) {
    this.userService.subscribeToContest(contestId).then(resp => {
      this.presentToast(`Vous avez rejoins le concours ${contestName}`);
    }).catch(error => {
      this.presentToast('Une erreur s\'est produite', 'error');
    } );
  }

}
