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

  constructor(private http: HttpClient) { }

  login(email, password): void {
    this.http.post('http://localhost:8000/login', {
      _token: 'vHfkgtLt9eEDw3ze3eTcnOpxAykBrfJgcWwdg5BW',
      email: email,
      password: password
    })
      .subscribe(data => {
        console.log(data);
      })
  }

}
