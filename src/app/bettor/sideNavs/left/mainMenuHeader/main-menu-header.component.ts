import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu-header',
  templateUrl: './main-menu-header.component.html',
  styleUrls: ['./main-menu-header.component.scss']
})
export class MainMenuHeaderComponent implements OnInit {

  searchText: string;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) {}

  ngOnInit() {
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

}