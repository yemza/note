import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  set(data: any): void {
    localStorage.setItem('token', data.jwtToken);
    localStorage.setItem('id', data.idUser);
  }

  handle(data: any): void {
    this.set(data);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getId(): any {
    return localStorage.getItem('id');
  }

  remove(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  decode(payload: any): any {
    return JSON.parse(atob(payload));
  }

  payload(token: any): any {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  isValid(): boolean {
    const token = this.getToken();
    const id = this.getId();

    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return +id === payload.idUser;
      }
    }
    return false;
  }

  getInfos(): any {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      return payload ? payload : null;
    }
    return null;
  }


  getUserId(token : string){
    return this.payload(token).idUser
  }

  loggedIn(): boolean {
    return this.isValid();
  }
}
