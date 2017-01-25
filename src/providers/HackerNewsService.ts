import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class HackerNewsService {

  constructor(public http: Http) {
  }

  public getStories() {
    let headers = new Headers();
    headers.append('accept', 'application/json');
    return this.http
      .get('http://hn.algolia.com/api/v1/search_by_date', {headers: headers}
      );
  }

}
