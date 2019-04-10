import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
    selector: 'text-survey',
    templateUrl: './text-survey.html'
  })
export class TextSurveyCmp {
    constructor(private HttpClient: HttpClient, private UserService: UserService) {
        this.HttpClient
          .get('/api/levheim-survey-texts')
          .subscribe((data: Array<string>) => console.log(data));
      }
}
