import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-bettor-init',
  templateUrl: './bettor-init.component.html',
  styleUrls: ['./bettor-init.component.scss']
})
export class BettorInitComponent implements OnInit {

  constructor(private MenuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleLeftSideNav() {
    this.MenuCtrl.open();
  }

}
