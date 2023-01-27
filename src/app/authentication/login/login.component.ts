import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/_core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  private subs = new Subscription();


  constructor( private fb : FormBuilder,
    private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.creationLoginForm()
  }


creationLoginForm(){
  this.loginFormGroup = this.fb.group({
    username:[null, Validators.required],
    password:[null, Validators.required]
  })
}

onSubmit(){
  this.subs.add(
     this.authenticationService.Login(this.loginFormGroup.value , {skip_token: 'true'}).subscribe((response)=>{
      console.log(response)
      console.log(response)

     })
  )

}
  

}
