import { Routes, RouterModule } from '@angular/router';
import { AuthGuard , LoginGuard} from './services/';


/*Layouts*/
import { DashBoardLayoutComponent } from './_layout/dashboard/layout/layout.component';
import { WebLayoutComponent } from './_layout/web/layout/layout.component';
import { BlankComponent } from './_layout/_blank/blank.component';


/*Vistas Web*/
import { WebContactoComponent , WebHomeComponent , WebNosotrosComponent , WebLoginComponent , WebRegisterComponent } from './web/';




const appRoutes: Routes = [

    {
        path: '',
        component: WebLayoutComponent,
        children: [
          { path: '', component: WebHomeComponent, pathMatch: 'full'},
          { path: 'nosotros', component: WebNosotrosComponent, pathMatch: 'full'},
          { path: 'contacto', component: WebContactoComponent, pathMatch: 'full'},
          { path: 'login', component: WebLoginComponent, pathMatch: 'full' , canActivate: [LoginGuard]},
          { path: 'register', component: WebRegisterComponent, pathMatch: 'full' , canActivate: [LoginGuard]},
        ]
    },


  {
    path: 'dashboard',
    component: DashBoardLayoutComponent,
    children: [
      { path: '', component: BlankComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
      { path: 'apis', component: BlankComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
    ]
  },


  { path: '**', redirectTo: '' }



];

export const routing = RouterModule.forRoot(appRoutes);


