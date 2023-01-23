import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  Login(userIdentity: any, headersObject = {}): Observable<object> {
    return this.http.post(environment.ApiURL + 'authenticate', userIdentity, {
      headers: headersObject,
    });
  }
}
