import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoComponent implements OnInit {
  constructor( private _wishList:WishListService, private navCtrl:NavController) {}

  ngOnInit() {}

  goAdd(){
    this.navCtrl.push(AddComponent);
  }

  viewDetail(list, i:number){
    this.navCtrl.push(DetailComponent, {
      list,
      i
    });
  }
}
