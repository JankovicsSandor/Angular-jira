import { Injectable } from '@angular/core';
import { BoardQuery, Issue, IssueQuery, IssueService } from '@store';
import { combineLatest, map, ReplaySubject } from 'rxjs';
import { BoardModel, BoardStageIssueModel } from 'src/models/boardModel';

@Injectable()
export class BoardIssueService {
  private boardIssueList: ReplaySubject<BoardModel[]> = new ReplaySubject();

  constructor(private boardQuery: BoardQuery, private issueQuery: IssueQuery, private issueService:IssueService) {

    combineLatest([this.boardQuery.getAllBoard$(), this.issueQuery.getAllIssue$()]).pipe(map(([boardList, issueList]) => {
      let allBoardList: BoardModel[] = [];

      boardList.forEach(board => {
        let actualBoard = new BoardModel(board.id, board.name);
        board.statuses.forEach(boardStage => {
          let matchinIssues = issueList.filter(issue => issue.statusId == boardStage.id && issue.boardId == board.id);
          actualBoard.stages.push(new BoardStageIssueModel(boardStage.id, boardStage.name, boardStage.vipLimit, matchinIssues));
        });
        allBoardList.push(actualBoard);
      });
      return allBoardList;
    })).subscribe(this.boardIssueList);
  }

  getBoardIssueList() {
    return this.boardIssueList.asObservable();
  }

  updateIssuePosition(issue:Issue,newsStatusId:number){
    this.issueService.updateIssuePosition(issue,newsStatusId);
  }
}
