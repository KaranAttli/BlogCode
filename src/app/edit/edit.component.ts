import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EditService} from "./edit.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EditService]
})
export class EditComponent implements OnInit {

  categoryError : any;
  titleError: any;
  contentError: any;

  constructor(private route: ActivatedRoute , private _service: EditService) {
    this.titleError = false;
    this.categoryError= false;
    this.contentError= false;

  }

  userForm = new FormGroup(
    {
      title : new FormControl(),
      category : new FormControl(),
      content : new FormControl()
    }
  );

  id : any;
  data: any;
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this._service.getBlog(this.id).subscribe(x=>{
      console.log("data is " + JSON.stringify(x));
      this.data=x;
      this.userForm.setValue(
        {
          title : x.title ,
          category : x.category,
          content : x.content
        }
      );
    });
  }

  sendBlogData(){
   if(this.userForm.value.title==null || this.userForm.value.title.trim()==""){
     this.titleError=true;
   }
   else if(this.userForm.value.content==null || this.userForm.value.content.trim()==""){
     this.contentError=true;
   }
   else if(this.userForm.value.category==null){
     this.contentError=true;
   }else {

     const data = {
       title : this.userForm.value.title,
       category : this.userForm.value.category,
       content: this.userForm.value.content,
       id: this.id
     }
     this._service.sendData(data).subscribe(x=>{
       window.location.href="/blogs";
     });



   }



  }


}
