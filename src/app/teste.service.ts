import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  public valorDeTestes = 42;


  constructor(
    private readonly http: HttpClient,
  ) {}


  postLogin(userData: {user: string, password: string}) {
    return this.http.post(
      'https://httpbin.org/post',
      userData,
    );
  }

}
