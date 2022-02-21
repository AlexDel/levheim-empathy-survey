import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {IUserInfo} from './types';

@Injectable({
  providedIn: 'root',
})
export class UserService {  
  userId: number;

  constructor(private HttpClient: HttpClient) {}


  async saveUserData(email) {
    const data = {
      email: email
    };

    this.userId = await this.HttpClient.post('/api/save-results', data).toPromise().then((res: number) => res);
  }
}
