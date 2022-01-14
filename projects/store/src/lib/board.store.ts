import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Board } from './models/board';

export interface BoardState extends EntityState<Board> {}

@Injectable()
@StoreConfig({ name: 'board' })
export class BoardStore extends EntityStore<BoardState> {

  constructor() {
    super();
  }

}
