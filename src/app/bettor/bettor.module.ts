import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { BettorPage } from './bettor.page';
import { BettorInitComponent } from './bettor-init/bettor-init.component';
import { UserGuard } from '../../guards/user/user.guard';
import { LayoutModule } from '@angular/cdk/layout';
import { LeftComponent } from './sideNavs/left/left.component';
import { MainMenuHeaderComponent } from './sideNavs/left/mainMenuHeader/main-menu-header.component';
import { UserContestsComponent } from './sideNavs/left/user-contests/user-contests.component';
import { ProfilMenuComponent } from './sideNavs/left/profil-menu/profil-menu.component';
import { UserService } from '../../services/user/user.service';
import { BlasonComponent } from './blason/blason.component';
import { ContestComponent } from './contest/contest.component';
import { StandingComponent } from './contest/standing/standing.component';
import { PlayersComponent } from './contest/players/players.component';


const routes: Routes = [
  {
    path: '',
    component: BettorPage,
    canActivate: [UserGuard],
    resolve: {
      userService: UserService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ],
  declarations: [BettorPage, BettorInitComponent, LeftComponent, MainMenuHeaderComponent, UserContestsComponent, ProfilMenuComponent, BlasonComponent, ContestComponent, StandingComponent, PlayersComponent],
})
export class BettorPageModule {}
