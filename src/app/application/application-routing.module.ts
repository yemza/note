import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [

  
    {
      path : '',
      loadChildren: () => import('./my-note-pad/my-note-pad.module').then(m => m.MyNotePadModule)       
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
