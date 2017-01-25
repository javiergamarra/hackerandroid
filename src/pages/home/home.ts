import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  talk:number = 2

  constructor(public navCtrl: NavController) {
    setTimeout(x => this.talk = 4, 2000);
  }

}
