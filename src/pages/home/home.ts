import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  stories = [{
    "created_at": "2017-01-25T15:50:41.000Z",
    "title": "Spotlight",
    "url": null,
    "author": "michelb",
    "points": null,
    "story_text": null,
    "comment_text": "It sure is not killed by Spotlight, I use many features in Alfred that are not available in Spotlight. Launching applications and doing simple tasks like calculations are possible with Spotlight. Snippets in Alfred work better then the OSX \u0026#x27;text\u0026#x27; feature. Alfred with the Powerpack is really great.",
    "num_comments": null,
    "story_id": 13478612,
    "story_title": "Night Shift Mode in macOS Sierra 10.12.4",
    "story_url": "http://www.macrumors.com/2017/01/24/night-shift-mode-in-macos-sierra-10-12-4/",
    "parent_id": 13481879,
    "created_at_i": 1485359441,
    "_tags": [
      "comment",
      "author_michelb",
      "story_13478612"
    ],
    "objectID": "13482335",
    "_highlightResult": {
      "author": {
        "value": "michelb",
        "matchLevel": "none",
        "matchedWords": []
      },
      "comment_text": {
        "value": "It sure is not killed by Spotlight, I use many features in Alfred that are not available in Spotlight. Launching applications and doing simple tasks like calculations are possible with Spotlight. Snippets in Alfred work better then the OSX 'text' feature. Alfred with the Powerpack is really great.",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_title": {
        "value": "Night Shift Mode in macOS Sierra 10.12.4",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_url": {
        "value": "http://www.macrumors.com/2017/01/24/night-shift-mode-in-macos-sierra-10-12-4/",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
  },
    {
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
    }]

  constructor(public navCtrl: NavController) {
  }

}
