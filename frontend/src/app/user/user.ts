import { Component } from '@angular/core';

import {IUserInfo} from '../types';
import {UserService} from '../user.service';

@Component({
  selector: 'user-data',
  templateUrl: './user.html'
})
export class UserDataCmp {
  userInfo = <IUserInfo>{};

  constructor(private UserService: UserService) {}

  process() {
    this.UserService.updateUserInfo(this.userInfo);
    console.log(this.UserService.userInfo);
  }
}
