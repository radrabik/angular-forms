import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class DataService {

  url = '';

  constructor(private httpClient: HttpClient) { }

  postAPI(user: User) {
    return this.httpClient.post<any>(this.url, user)
  }

}