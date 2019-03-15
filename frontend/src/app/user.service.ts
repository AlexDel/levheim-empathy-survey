import { Injectable } from '@angular/core';

import {IUserInfo} from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo = <IUserInfo>{};

  empathyLevel = 0;

  constructor() {}

  updateUserInfo(info: IUserInfo) {
    this.userInfo = info;
  }

  calcEmpathyLevel(answers): number {
    const decrement = (i) => i - 1;

    const positiveIdx = [1, 5, 7, 8, 9, 10, 12, 14, 16, 17, 18, 19, 25, 26, 27, 29, 31].map(decrement);
    const negativeIdx = [2, 3, 4, 6, 11, 13, 15, 20, 21, 22, 23, 24, 28, 30, 32, 33].map(decrement);

    this.empathyLevel = answers.reduce((acc, val, id) => {
      if ((val && positiveIdx.includes(id)) || (!val && negativeIdx.includes(id)))
        return acc + 1;
      return acc;
    }, 0);

    return this.empathyLevel;
  }
}
