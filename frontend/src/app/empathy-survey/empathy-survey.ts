import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../user.service';

@Component({
  selector: 'empathy-survey',
  templateUrl: './empathy-survey.html'
})
export class EmpathySurveyCmp {
  instructionsHasRead = false;

  questions: Array<string>;

  questionId = 0;

  answers = [];

  progressValue = 0;

  constructor(private HttpClient: HttpClient, private UserService: UserService) {
    this.HttpClient
      .get('http://0.0.0.0:5000//mehrabian-survey-question')
      .subscribe((data: Array<string>) => this.questions = data);
  }

  nextQuestion(answer) {
    this.answers.push(answer);

    if (this.answers.length < this.questions.length) {
      this.questionId++;
    } else {
      this.UserService.calcEmpathyLevel(this.answers);
      console.log(this.UserService.empathyLevel);
    }

    this.progressValue = this.answers.length / this.questions.length * 100;
  }
}
