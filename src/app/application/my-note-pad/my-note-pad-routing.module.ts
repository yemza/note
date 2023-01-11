import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyNotesPadContainerComponent } from './my-notes-pad-container/my-notes-pad-container.component';

const routes: Routes = [

  {
    path:"",
    component: MyNotesPadContainerComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNotePadRoutingModule { }
