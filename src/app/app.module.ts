import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http , Response , Headers , HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

/*Servicios*/
import { globalService , LoginService , ToastService , AuthGuard , LoginGuard } from './services/';


/*Layouts*/
import { WebLayoutComponent , WebHeaderComponent , WebFooterComponent } from './_layout/web/';
import { DashBoardLayoutComponent , DashBoardHeaderComponent , DashBoardFooterComponent } from './_layout/dashboard/';
import { BlankComponent } from './_layout/_blank/blank.component';


/*Vistas Web*/
import { WebContactoComponent , WebHomeComponent , WebNosotrosComponent , WebLoginComponent , WebRegisterComponent } from './web/';







export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}






@NgModule({
  declarations: [
    AppComponent,
    DashBoardLayoutComponent,
    WebLayoutComponent,
    WebHeaderComponent,
    WebFooterComponent,
    DashBoardHeaderComponent,
    DashBoardFooterComponent,
    WebContactoComponent,
    WebHomeComponent,
    WebNosotrosComponent,
    WebLoginComponent,
    WebRegisterComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ToastrModule.forRoot(),
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot()
  ],
  providers: [
    globalService,
    LoginService,
    ToastService,
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
