import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';
import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-done',
  templateUrl: 'done.component.html',
})
export class DoneComponent implements OnInit {
  constructor( private _wishList:WishListService, private navCtrl:NavController) {}

  ngOnInit() {}

  viewDetail(list, i:number){
    this.navCtrl.push(DetailComponent, {
      list,
      i
    });
  }
}
