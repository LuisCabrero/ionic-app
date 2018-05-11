import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
})
export class TodoComponent implements OnInit {
  constructor( private _wishList:WishListService) {  }

  ngOnInit() {}
}
