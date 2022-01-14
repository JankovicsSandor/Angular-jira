import { BoardService } from './board.service';
import { BoardQuery } from './board.query';
import { NgModule } from '@angular/core';
import { BoardStore } from './board.store';



@NgModule({
  declarations: [

  ],
  providers:[
    BoardStore,
    BoardQuery,
    BoardService
  ],
  exports: [
  ]
})
export class StoreModule { }
