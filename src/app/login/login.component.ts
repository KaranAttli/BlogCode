import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form} from "@angular/forms";
import {LoginService} from "./login.service";
import {Constants} from "../Constants";
import './user';

// import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ LoginService ]
})
export class LoginComponent implements OnInit {


  constructor(private _service: LoginService , private fb : FormBuilder) { }
  data: any;
  userform: any =  new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    }

  );

  





  ngOnInit() {
  }

  submitForm(){
    const that = this;
      this._service.sendCredentials(this.userform.value).subscribe(x=>{
         this.data = x ;
         this.data.forEach(function(item){
           if(item.username == that.userform.value.username && item.password== that.userform.value.password ){
             // console.log("user exists");
             // console.log("username is " + item.username);
             // Constants.setCurrentUser(item.username);
             localStorage.setItem('username',item.username);
             localStorage.setItem('type',item.type);
             // console.log("username is jfkjer " + Constants.currentUser);
             window.location.href="/home";
           }
         });
      });

  }

}
