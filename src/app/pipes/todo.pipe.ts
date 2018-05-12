import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/index';

@Pipe({
  name: 'todo',
  pure: false
})
export class TodoPipe implements PipeTransform {
  transform(lists: List[], done: boolean = false ): List[] {
    let newList:List[] = [];
    for (let list of lists){
      if(list.done == done){
        newList.push(list);
      }
    }
    return newList;
  }
}
