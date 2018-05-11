import { Component } from '@angular/core';

import { TodoComponent } from '../todo/todo.component';
import { DoneComponent } from '../done/done.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodoComponent;
  tab2Root = DoneComponent;

  constructor() {

  }
}
