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

  empathyLevel: number;

  constructor(private HttpClient: HttpClient, private UserService: UserService) {
    this.HttpClient
      .get('/api/mehrabian-survey-question')
      .subscribe((data: Array<string>) => this.questions = data);
  }

  nextQuestion(answer) {
    this.answers.push(answer);

    if (this.answers.length < this.questions.length) {
      this.questionId++;
    } else {
      this.empathyLevel = this.UserService.calcEmpathyLevel(this.answers);
    }

    this.progressValue = this.answers.length / this.questions.length * 100;
  }
}
