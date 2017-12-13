import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NewBlogService} from "./new-blog.service";

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'] ,
  providers : [NewBlogService]
})
export class NewBlogComponent implements OnInit {

  constructor(private _service: NewBlogService) { }

  userForm = new FormGroup(
    {
      title : new FormControl(),
      content : new FormControl(),
      category : new FormControl()
    }
  );

  titleError: any;
  contentError : any;
  categoryError : any;

  ngOnInit() {
  }

  onclicked(){
    if(this.userForm.value.title==null || this.userForm.value.title.trim()==""){
        this.titleError=true;
    }
    else if(this.userForm.value.content==null || this.userForm.value.content.trim()==""){
      this.contentError=true;
    }
    else if(this.userForm.value.category==null){
      this.categoryError = true;
    }
    else {
      this._service.addNewBlog(this.userForm.value).subscribe(x => {
        window.location.href = '/home';


      });
    }
  }

}
