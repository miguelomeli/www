
import { Injectable } from '@angular/core';
import { Http , Response , Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  public dataUser;
  public token;
  public api: string;


  constructor(private _http: HttpClient , private http: Http , private router: Router){
    this.api = GLOBAL.api;
  }


  Register(data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + 'register' , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }

  validateSMS(data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + 'sms' , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }

  Validate(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(this.api + 'validate/' + data ).pipe(map((res) => {
      return res.json();
    }));
  }

  Login(data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + 'login' , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }

  Google(data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + 'google' , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }

  Forgot(data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + 'forgot' , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }

  PasswordTMP(data) {
    return this.http.get(this.api + 'password/' + data ).pipe(map((res) => {
      return res.json();
    }));
  }


  Logout() {
    try{
      localStorage.removeItem("token");
      localStorage.removeItem("data");
      //localStorage.removeItem("lang");
    } catch (e) {
      //
    }
    this.router.navigate(['/']);
  }


  checkAuth() {
    let session = false;
    const data = localStorage.getItem('token');
    if (data !== 'undefined' && data !== null) {
      session = true;
    } else {
      session = false;
    }
    return session;
  }



  SetLocalStorage(name , data) {
    localStorage.setItem(name , data);
    return false;
  }

  getToken() {
    const data = localStorage.getItem('token');
    if (data !== 'undefined' && data !== null) {
      this.token = data;
    } else {
      this.token = null;
    }
    return this.token;
  }

  getData() {
    const data = localStorage.getItem('data');
    if (data !== 'undefined' && data !== null) {
      this.dataUser = JSON.parse(data);
    } else {
      this.dataUser = null;
    }
    return this.dataUser;
  }

  getLang() {
    const data = localStorage.getItem('lang');
    let lang = 'es';
    if (data !== 'undefined' && data !== null) {
      lang = data;
    } else {
      lang = 'es';
    }
    return lang;
  }



  Icos() {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(this.api + 'icos/' ).pipe(map((res) => {
      return res.json();
    }));
  }




  Post(path , data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.api + path , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }


  Get(path) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(this.api + path , {headers: headers} ).pipe(map((res) => {
      return res.json();
    }));
  }




  PostAuth(path , data) {
    const params = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json' , 'Authorization' : this.getToken()});
    return this.http.post(this.api + path , params , {headers: headers}).pipe(map((res) => {
      return res.json();
    }));
  }


  GetAuth(path) {
    const headers = new Headers({'Content-Type': 'application/json' , 'Authorization' : this.getToken() });
    return this.http.get(this.api + path , {headers: headers} ).pipe(map((res) => {
      return res.json();
    }));
  }

}
