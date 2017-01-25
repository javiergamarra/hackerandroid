import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import "rxjs/Rx";
import {HackerNewsService} from "../../providers/HackerNewsService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  stories;

  constructor(public navCtrl: NavController, public hackerNewsService: HackerNewsService) {
  }

  ngOnInit(): void {
    this.stories = this.hackerNewsService.getStories();
  }
}
