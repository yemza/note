import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http : HttpClient) { }




  getAllNoteByUserId():Observable<any>{
   return this.http.get(environment.ApiURL+'getAllNoteByUserId')
  }

  

}
