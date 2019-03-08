import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {IUserInfo} from '../types';
import {UserService} from '../user.service';

@Component({
  selector: 'user-data',
  templateUrl: './user.html'
})
export class UserDataCmp {
  userInfo = <IUserInfo>{};

  constructor(private UserService: UserService, private Router: Router) {}

  process() {
    this.UserService.updateUserInfo(this.userInfo);
    this.Router.navigate(['empathy-survey']);
  }
}
