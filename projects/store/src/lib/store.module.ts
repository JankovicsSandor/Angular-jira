import { IssueService } from './issue.service';
import { IssueQuery } from './issue.query';
import { BoardService } from './board.service';
import { BoardQuery } from './board.query';
import { NgModule } from '@angular/core';
import { BoardStore } from './board.store';
import { IssueStore } from './issue.store';



@NgModule({
  declarations: [

  ],
  providers:[
    BoardStore,
    BoardQuery,
    BoardService,

    IssueStore,
    IssueQuery,
    IssueService
  ],
  exports: [
  ]
})
export class StoreModule { }
