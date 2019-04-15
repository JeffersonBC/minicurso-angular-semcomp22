import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TesteService } from '../teste.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  loading = false;

  ageValue = 0;

  userInfo = new FormGroup({
    'name': new FormControl(null, [ Validators.required ]),
    'age': new FormControl(null, [ Validators.required ]),
    'email': new FormControl(null, [ Validators.required, Validators.email ]),
  });

  constructor(
    private readonly testService: TesteService,
  ) { }

  ngOnInit() {
    this.userInfo.controls.age.valueChanges.subscribe(
      value => {
        this.ageValue = value;
      },
    );
  }

  send() {
    this.loading = true;

    this.testService.postLogin(this.userInfo.value).subscribe(
      () => {
        alert('Logado com sucesso');
        this.loading = false;
      }
    );
  }

}
