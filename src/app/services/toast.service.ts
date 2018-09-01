
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  public api: string;

  constructor(private toast: ToastrService){
    this.api = GLOBAL.api;
  }



  error(msg, title) {

    this.toast.error(msg, title , {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  success(msg, title) {

    this.toast.success(msg, title , {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });

  }



}
