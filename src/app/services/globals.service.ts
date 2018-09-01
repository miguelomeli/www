

import { Injectable } from '@angular/core';
import { Http , Response , Headers } from '@angular/http';

import { HttpClient } from '@angular/common/http';


//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

declare var grecaptcha: any;


@Injectable()
export class globalService{
  public api: string;
  public apiCaptcha: string;
  public Captcha: string;



  constructor(private _http: HttpClient) {
    this.api = GLOBAL.api;
    this.apiCaptcha = GLOBAL.captcha;
  }






	recaptcha(){
	    try{
	      grecaptcha.render('recaptcha', {
	        sitekey: this.apiCaptcha,
	        callback: function(response){
	          	this.Captcha = response;
	          	console.log(response);
	        }
	      });
	    } catch(e){}
	}


	numberOnly(event): boolean {
		const charCode = (event.which) ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}

	validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}




	paises(){
		let headers = new Headers({'Content-Type':'application/json'});


		  return this._http.get(this.api+'paises');


		//return this._http.get(this.api+'paises').pipe(map(res => res.json()));
		//return this._http.get(this.api+'paises').map(res => res.json());

	}



}



