export class Constants {
  public static url: string = "https://blogkaran.herokuapp.com";
  public static getBlogs: string = "/blogs";
  public static newBlog : string = "/newBlog";
  public static users: string = "/users"
  public static currentUser: string = '';

  public static getCurrentUser(){
    return Constants.currentUser;
  }

  public static setCurrentUser(name: string){
    Constants.currentUser= name;
  }


}


