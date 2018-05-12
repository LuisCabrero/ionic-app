import { Component, OnInit } from '@angular/core';
import { List, ListItem } from '../../app/classes/index';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string;
  itemName:string = "";

  items:ListItem[] = [];


  constructor() {  }

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
}
