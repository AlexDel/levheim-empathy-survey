import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
    selector: 'text-survey',
    templateUrl: './text-survey.html',
    styles: [
      `
      .emotion-diag {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      .emotion-diag span {
        display: block;
        width: 100px;
      }



      ::ng-deep .mat-accent .mat-slider-thumb {
        background-color: gray;
      } 
      ::ng-deep .mat-accent .mat-slider-thumb-label {
          background-color: gray;
      } 
      ::ng-deep .mat-accent .mat-slider-track-fill {
          background-color: gray;
      } 
      `
    ]
})
export class TextSurveyCmp {
  instructionsHasRead = false;

  texts: Array<any>;

  textId = 0;

  answers = [];

  progressValue = 0;

  constructor(private HttpClient: HttpClient, private UserService: UserService) {
    this.HttpClient
      .get('/api/levheim-survey-texts')
      .subscribe((data: Array<string>) => this.texts = data);
  }


  nextText(answer) {
    this.answers.push(answer);

    if (this.answers.length < this.texts.length) {
      this.textId++;
    }

    this.progressValue = this.answers.length / this.texts.length * 100;
  }
}
