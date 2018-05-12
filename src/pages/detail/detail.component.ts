import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {

  i:number;
  list:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _wishList: WishListService,
    public alertCtrl: AlertController
  ) {
    this.i = this.navParams.get("i");
    this.list = this.navParams.get("list");


  }

  ngOnInit() {}

  update(item:ListItem){
    item.done = !item.done;

    let allCompleted = true;
    for(let item of this.list.items ){
      if(!item.done){
        allCompleted = false;
        break;
      }
    }

    this.list.done = allCompleted;

    this._wishList.persistData();
  }

  deleteList(){
    let confirm = this.alertCtrl.create({
      title: this.list.name,
      message: 'Do you want do delete the list?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {}
        },
        {
          text: 'Agree',
          handler: () => {
            this._wishList.deleteList(this.i);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }
}
