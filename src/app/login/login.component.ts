import { Component, OnInit } from '@angular/core';
import { TesteService } from '../teste.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = {
    user: '',
    password: '',
  };


  constructor(
    private readonly testService: TesteService,
  ) {}

  send() {
    this.testService.postLogin(this.loginForm).subscribe(
      () => alert('Logado com sucesso')
    );
  }
}
