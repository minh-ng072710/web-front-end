import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs'
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "Angular Demo CRUD";
  description = "Angular-demo-them-xoa-sua";
  btn_value = "Add More Cate"
  item_value = '';
  email = '';
  password = ''
  items: Observable<any[]>;
  user: User = new User();

  submitted = false;
  constructor(public db: AngularFireDatabase, private userService: UserService) {
    this.items = db.list('items').valueChanges()
  }

  ngOnInit(): void {

  }
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  save() {
    // this.user.key = this.makeid(15);
    this.userService.creatUser(this.user);
    this.user = new User();
  }
  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  onSubmit_New(fa) {
    this.submitted = true;
    alert("key nè: " + this.user.key)

    console.log("key nè: " + this.user.key)
    this.save();
  }
  onSubmit(f) {
    console.log()
    this.db.list('items').push({
      email: f.form.value.email,
      password: f.form.value.password
    })
  }

}
