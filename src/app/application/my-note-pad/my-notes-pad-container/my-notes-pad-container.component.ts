import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/_core/models/i-note';
import { NoteService } from 'src/app/_core/services/note.service';
import { TokenService } from 'src/app/_core/services/token.service';

@Component({
  selector: 'app-my-notes-pad-container',
  templateUrl: './my-notes-pad-container.component.html',
  styleUrls: ['./my-notes-pad-container.component.css']
})
export class MyNotesPadContainerComponent implements OnInit {

  notes : INote[]=[];
  noteSelected: INote;

  constructor(private noteService : NoteService, 
              private tokenService : TokenService) { }

  ngOnInit(): void {
    this.getAllNoteByUserId()
  }


  getAllNoteByUserId(){
    this.noteService.getAllNoteByUserId(this.tokenService.getUserId(this?.tokenService?.getToken())).subscribe((response)=>{
      this.notes =response;
    })
  }


  
  noteIdSelected(noteId: any){
    this.noteSelected = this.notes.find(note =>note.noteId == noteId)

  }
}
