import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  

  constructor(private http : HttpClient, private tokenService: TokenService) { }




  getAllNoteByUserId(userId: any):Observable<any>{
   return this.http.get(environment.ApiURL+'getAllNoteByUserId?userId='+userId)
  }
}
