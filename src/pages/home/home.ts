import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  story = {
    "created_at": "2017-01-25T15:50:39.000Z",
    "title": "Make Learning a Lifelong Habit",
    "url": "https://hbr.org/2017/01/make-learning-a-lifelong-habit",
    "author": "devy",
    "points": 1,
    "story_text": null,
    "comment_text": null,
    "num_comments": 0,
    "story_id": null,
    "story_title": null,
    "story_url": null,
    "parent_id": null,
    "created_at_i": 1485359439,
    "_tags": [
      "story",
      "author_devy",
      "story_13482334"
    ],
    "objectID": "13482334",
    "_highlightResult": {
      "title": {
        "value": "Make Learning a Lifelong Habit",
        "matchLevel": "none",
        "matchedWords": []
      },
      "url": {
        "value": "https://hbr.org/2017/01/make-learning-a-lifelong-habit",
        "matchLevel": "none",
        "matchedWords": []
      },
      "author": {
        "value": "devy",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  }

  constructor(public navCtrl: NavController) {
  }

}
