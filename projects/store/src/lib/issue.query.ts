import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { IssueState, IssueStore } from './issue.store';

@Injectable()
export class IssueQuery extends QueryEntity<IssueState> {

  constructor(protected override store: IssueStore) {
    super(store);
  }

  getAllIssue$(){
    return this.selectAll();
  }

}
