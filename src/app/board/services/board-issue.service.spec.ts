import { TestBed } from '@angular/core/testing';

import { BoardIssueService } from './board-issue.service';

describe('BoardIssueService', () => {
  let service: BoardIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
