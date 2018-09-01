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
  selector: 'app-web-register',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class WebRegisterComponent implements OnInit {
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
    if( !this.dataForm.nombre || this.dataForm.nombre < 6 ){
      $("#nombre").focus();
      this.toast.error("Falta el nombre", "Error");
      return false;
    }
    if( !this.dataForm.apellido || this.dataForm.apellido < 6 ){
      $("#apellido").focus();
      this.toast.error("Falta el apellido", "Error");
      return false;
    }
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
    this._loginService.Post('registro' , this.dataForm).subscribe(
      response => {
        this.toast.success(response.msg, "Error");
        this.router.navigate(['/']);
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
