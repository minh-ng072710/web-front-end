import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs'
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

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges()
  }

  ngOnInit(): void {
  }
  onSubmit(f) {
    console.log()
    this.db.list('items').push({
      email: f.form.value.email,
      password: f.form.value.password
    })
  }

}
