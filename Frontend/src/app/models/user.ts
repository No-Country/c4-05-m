export class User {
    constructor(
      public id = String,
      public firstName: String,
      public lastName: String,
      public username: String,
      public email: String,
      public password: String,
      public img: String
    ){}
}