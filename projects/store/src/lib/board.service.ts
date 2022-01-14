import { Injectable } from '@angular/core';
import { BoardStore } from './board.store';
import { Board } from './models/board';

@Injectable()
export class BoardService {

  constructor(private boardStore:BoardStore) { }


  addNewBoard(board:Board){
    this.boardStore.add(board);
  }
}
