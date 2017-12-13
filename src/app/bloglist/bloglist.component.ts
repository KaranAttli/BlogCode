import { Component, OnInit } from '@angular/core';
import {BloglistService} from "./bloglist.service";
import { Blog } from './Blog';
import {FormControl, FormGroup} from "@angular/forms";
import {Constants} from "../Constants";


@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css'],
  providers : [BloglistService]
})
export class BloglistComponent implements OnInit {

  user = Constants.currentUser;
  constructor(private _service: BloglistService) { }
  userform: any = new FormGroup({
    category : new FormControl()
  });
  list:any[];
  data: any;
  buffer: any;
  ngOnInit() {

     this._service.getBlogs().subscribe(x=>{
       this.data = x ;
       this.buffer= x;
       console.log(JSON.stringify(x));
     });

  }


  filterList() {

    let that = this;
    let temp: any = [];
    if (this.userform.value.category != "") {
      // console.log("in if");
      this.buffer.forEach(function (item) {

        if (item.category == that.userform.value.category) {
          temp.push(item);
        }
      });
      this.data = temp;

      // console.log("leaving fun" + this.data);
      this.userform.value.category=null;
      // console.log("jdewjwkf " + this.userform.value.category);
    }
  else{
      // console.log("in else");
      this.data=this.buffer;
    }

}

check(data){
      if(data.author==localStorage.getItem('username') || localStorage.getItem('type')=="admin"){

        return true;
      }
      return false;
}


deleteBlog(blogData){
  this._service.deleteBlog(blogData.id).subscribe(x=>{
    window.location.href='/blogs';
  });
}

  editBlog(blog){
  window.location.href = '/edit/' + blog.id;
  }



}
