import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Issue } from './models/issue';

export interface IssueState extends EntityState<Issue> {}

@Injectable()
@StoreConfig({ name: 'issue' })
export class IssueStore extends EntityStore<IssueState> {

  constructor() {
    super();
  }

}
