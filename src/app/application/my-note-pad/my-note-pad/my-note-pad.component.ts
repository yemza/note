import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INote } from 'src/app/_core/models/i-note';

@Component({
  selector: 'app-my-note-pad',
  templateUrl: './my-note-pad.component.html',
  styleUrls: ['./my-note-pad.component.css'],
})
export class MyNotePadComponent implements OnInit {
  @Input() noteSelected: INote;
  noteFormGroup: FormGroup;
  @Output() newNoteEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   this.createNoteForm()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.noteSelected) {
      this.setFormValues();
    }
  }



  createNoteForm(){
    this.noteFormGroup = this.fb.group({
      noteId : [null ],
      noteTitle : [null , Validators.required],
      noteDescription : [null , Validators.required],
      noteModifiedDate : [null ],
      noteWrittenDate : [null ],
      noteUser : [null ]

    })
  }

  setFormValues() {
   this.noteFormGroup.setValue(this.noteSelected)
  }


  SaveNote(){
    this.newNoteEvent.emit(this.noteFormGroup.value);
  }
}
