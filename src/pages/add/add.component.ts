import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { List, ListItem } from '../../app/classes/index';

import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string = "";
  itemName:string = "";

  items:ListItem[] = [];


  constructor(
    public alertCtrl:AlertController,
    public _wishList:WishListService,
    public navCtrl:NavController
  ) {  }

  ngOnInit() {}

  add(){
    if(this.itemName.length == 0){
      return;
    }

    let item = new ListItem();
    item.name = this.itemName;

    this.items.push(item);
    this.itemName = "";

  }

  delete(i:number){
    this.items.splice(i,1);
  }

  saveList(){
    if(this.listName.length == 0){
      let alert = this.alertCtrl.create({
        title: 'List name is required',
        subTitle: 'You must specify a name for your list',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let list = new List(this.listName);
    list.items = this.items;
    this._wishList.lists.push(list);

    this.navCtrl.pop();


  }
}
