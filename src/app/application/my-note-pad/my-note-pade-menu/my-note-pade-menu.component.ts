import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { INote } from 'src/app/_core/models/i-note';

@Component({
  selector: 'app-my-note-pade-menu',
  templateUrl: './my-note-pade-menu.component.html',
  styleUrls: ['./my-note-pade-menu.component.css']
})
export class MyNotePadeMenuComponent implements OnInit {
   @Input() notes : INote[]=[];
   @Output() noteIdEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.notes){
      console.log(this.notes)
    }
  }

  noteIdSelected(noteId: any){
    console.log(noteId)
    this.noteIdEvent.emit(noteId)
  }


}
