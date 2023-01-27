import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './_shared/layout/layout.component';



const routes: Routes = [
   
  {
    path : '',
    redirectTo :'/note',
    pathMatch :'full'
  },

  {
    path :'',
    component : LayoutComponent,
      children:[
        {
          path : 'note',
          loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
        
        },
      
        {
          path : 'auth',
          loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
        
        },
      ]
  },
  

  {
    path : '**',
    redirectTo :'/note',
    pathMatch :'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
