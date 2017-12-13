import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes , RouterModule} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {HttpModule} from "@angular/http";
// import { LocalStorageService, LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter';

import { AppComponent } from './app.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import {ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path : '' , component : LoginComponent
  },
  {
    path : 'blogs' , component : BloglistComponent
  },
  {
    path : 'home' , component : HomepageComponent
  } ,
  {
    path: "newBlog" , component : NewBlogComponent
  },
  {
    path : 'blogs/newBlog' , redirectTo : 'newBlog'
  },
  {
    path: 'home/newBlog' , redirectTo : 'newBlog'
  },
  {
    path : 'newBlog/newBlog' , redirectTo : 'newBlog'
  },
  {
    path: 'signup' , component : SignupComponent
  },
  {
    path : 'favourites' , component : FavouritesComponent
  },
  {
    path : 'edit/:id' , component : EditComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BloglistComponent,
    NavbarComponent,
    NewBlogComponent,
    LoginComponent,
    SignupComponent,
    FavouritesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(routes) , HttpModule  , ReactiveFormsModule ,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
