import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {globalService} from '../../services/globals.service';
import {LoginService} from '../../services/login.service';
import {ToastService} from '../../services/toast.service';
import {GLOBAL} from '../../services/global';
declare var grecaptcha: any;




@Component({
  selector: 'app-web-login',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class WebLoginComponent implements OnInit {
  public dataForm:any = {};

  constructor(
    private _globalService: globalService ,
    private _loginService: LoginService ,
    private translate: TranslateService ,
    private toast: ToastService ,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {



  }


  onSubmit(){
    if( !this.dataForm.email || this.dataForm.email < 6 ){
      $("#email").focus();
      this.toast.error("Falta el email", "Error");
      return false;
    }
    if( !this.dataForm.password || this.dataForm.password < 6 ){
      $("#password").focus();
      this.toast.error("Falta el password", "Error");
      return false;
    }
    this._loginService.Post('login' , this.dataForm).subscribe(
      response => {
        this._loginService.SetLocalStorage("token" , response.token);
        this._loginService.SetLocalStorage("data" , JSON.stringify(response.data));
        this.toast.success(response.msg, "exito");
        this.router.navigate(['/dashboard']);
      },
      error => {
        const errorMsg = <any>error;
        if(errorMsg != null) {
          const response = JSON.parse(errorMsg._body);
          this.toast.error(response.msg, "Error");
        }
      }
    );

  }



}



