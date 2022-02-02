import { Issue } from './models/issue';
import { IssueStore } from './issue.store';
import { Injectable } from '@angular/core';

@Injectable()
export class IssueService {

  constructor(private issueStore: IssueStore) { }

  addIssue(newIssue: Issue) {
    this.issueStore.add(newIssue);
  }
}
