import { Component } from '@angular/core';

import {Router} from '@angular/router';

import {UserService} from '../user.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.html'
})
export class WelcomeComponent {
  title = 'frontend';
  email: string = '';

  constructor(private UserService: UserService, private Router: Router) {
    
  }

  process() {
    this.UserService.saveUserData(this.email);
    this.Router.navigate(['text-instruction']);
  }
}
