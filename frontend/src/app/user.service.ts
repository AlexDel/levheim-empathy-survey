import { Injectable } from '@angular/core';

import {IUserInfo} from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo = <IUserInfo>{};

  constructor() {}

  updateUserInfo(info: IUserInfo) {
    this.userInfo = info;
  }
}
