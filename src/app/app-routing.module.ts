import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterAuthGuard } from './_core/guards/after-auth.guard';
import { AuthGuard } from './_core/guards/auth.guard';
import { LayoutComponent } from './_shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
      {
        path: 'notes',
        loadChildren: () =>
          import('./application/application.module').then(
            (m) => m.ApplicationModule
          ),
          canActivate:[AuthGuard]
      },

      {
        path: 'auth',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          )    , canActivate :[AfterAuthGuard]

      },

      {
        path: '**',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
