import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
//import {FormGroup} from "../../../node_modules/@angular/forms/src/model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  financeForm: FormGroup;
  result = "";

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.financeForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    });
  }

  onSubmit(){
    this.loginService
        .login(this.financeForm.value.email, this.financeForm.value.password);
    /*.subscribe(
            (data) => console.log(data)
        );*/
  }

  /*forbiddenData(): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(this)
      },1500)
    })
  }*/

}
