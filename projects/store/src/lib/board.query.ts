import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { BoardStore, BoardState } from './board.store';
import { Board } from './models/board';

@Injectable()
export class BoardQuery extends QueryEntity<BoardState> {

  constructor(protected override store: BoardStore) {
    super(store);
  }

  getAllBoard$():Observable<Board[]>{
    return this.selectAll();
  }

}
