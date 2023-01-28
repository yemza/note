import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyNotePadRoutingModule } from './my-note-pad-routing.module';
import { MyNotesPadContainerComponent } from './my-notes-pad-container/my-notes-pad-container.component';
import { MyNotePadComponent } from './my-note-pad/my-note-pad.component';
import { MyNotePadeMenuComponent } from './my-note-pade-menu/my-note-pade-menu.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    MyNotesPadContainerComponent,
    MyNotePadComponent,
    MyNotePadeMenuComponent
  ],
  imports: [
    CommonModule,
    MyNotePadRoutingModule,
    SharedModule,
  ]
})
export class MyNotePadModule { }
