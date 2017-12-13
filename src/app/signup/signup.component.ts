import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SignupService} from "./signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] ,
  providers : [SignupService]
})
export class SignupComponent implements OnInit {

  constructor(private _service : SignupService) { }

  signupForm = new FormGroup(
    {
      username : new FormControl(),
      password : new FormControl()
    }
  );

  usernameError: any;
  passwordError: any;
  ngOnInit() {
  }

  signup(){
    this._service.sendData(this.signupForm.value).subscribe(x=>{

      if(this.signupForm.value.username==null || this.signupForm.value.username.trim()==""){
        this.usernameError=true;
      }
      else if(this.signupForm.value.password==null || this.signupForm.value.password.trim()==""){
        this.passwordError=true;
      }
      else{

        localStorage.setItem('username',this.signupForm.value.username);
        localStorage.setItem('type','user');
        window.location.href= '/home';

      }



    });
  }

}
