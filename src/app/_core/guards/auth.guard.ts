import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private tokenService : TokenService,
  private route : Router,
  private auccountService : AccountService){
}

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean  {
    if(!this.tokenService.loggedIn()) {
      this.tokenService.remove();
      this.auccountService.changeStatus(false)
      this.route.navigateByUrl('/auth/login');
      return false
    }
    return true;
  }
  
}
