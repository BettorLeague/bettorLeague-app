import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from '../guards/guest/guest.guard';
import { UserGuard } from '../guards/user/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [GuestGuard]
  },
  {
    path: 'app',
    loadChildren: './bettor/bettor.module#BettorPageModule',
    canActivate: [UserGuard]
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
