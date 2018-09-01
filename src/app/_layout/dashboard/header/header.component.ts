import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from '../../../services/login.service';
import {ToastService} from '../../../services/toast.service';
import swal from 'sweetalert2';


@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class DashBoardHeaderComponent implements OnInit {
  public imgLang = './assets/img/flags/lang_es.png';
  public txtLang = 'es';
  public activeToken = false;

  constructor(private translate: TranslateService , private _loginService: LoginService , private toast: ToastService ,) {
    //this.txtLang = this._loginService.getLang();
    //translate.setDefaultLang(this.txtLang);
    //this.activeToken = this._loginService.checkAuth();
  }

  /*
  switchLanguage(language: string) {
    this.imgLang = './assets/img/flags/lang_'+language+'.png';
    localStorage.setItem('lang' , language);
    this.translate.use(language);
  }
  */

  ngOnInit() {
    //this.imgLang = './assets/img/flags/lang_'+this.txtLang+'.png';
  }

  /*
  salirSistema() {
    const title = this.translate.instant('login.salir_title');
    const text = this.translate.instant('login.salir_subtitle');
    swal({
      title: title,
      text: text,
      type: 'warning',
      showConfirmButton: true,
      showCancelButton: true
    })
      .then((willDelete) => {
        if (willDelete.value) {
          this._loginService.Logout();
          const title = this.translate.instant('login.logoutTitle');
          const msg = this.translate.instant('login.logoutSubTitle');
          this.toast.success(msg, title);
        } else {
          //console.log("no");
        }
      });

  }
  */


}


