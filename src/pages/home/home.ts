import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {Http, Headers} from "@angular/http";
import "rxjs/Rx";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  stories;

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ngOnInit(): void {

    let headers = new Headers();
    headers.append('accept', 'application/json');

    this.http
      .get('http://hn.algolia.com/api/v1/search_by_date', {headers: headers}
      )
      .subscribe(
        stories => this.stories = stories.json()['hits'],
        err => console.log(err)
      );
  }
}
