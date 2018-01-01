import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8000'
  })

};


@Injectable()
export class LoginService {
  loginError = false;
  constructor(private http: HttpClient) { }

  login(email, password): void {
    this.http.post('http://localhost:8000/public/api/login', {
      email: email,
      password: password
    })
      .subscribe(data => {
        console.log(data);
      },err => {
        if (err.hasOwnProperty('error')) {
          this.loginError = true;
          console.log("Client-side error occured.");
        }
      })
  }

}
