import { BoardModel } from './../models/boardModel';
import { BoardQuery, BoardService } from '@store';
import { Component } from '@angular/core';
import { Board } from 'projects/store/src/public-api';
import { Status } from 'projects/store/src/lib/models/board';
import { ReplaySubject } from 'rxjs';
import { BoardIssueService } from './board/services/board-issue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jira';
  allBoard$: ReplaySubject<BoardModel[]> = new ReplaySubject(1);

  constructor(private bService: BoardService, private boardQuery: BoardIssueService) {
    this.boardQuery.getBoardIssueList().subscribe(this.allBoard$);
  }

  addNewBoard() {
    let newBoard = new Board();
    let statuses: Status[] = [];

    let firstStatus = new Status();
    firstStatus.name = "Open";

    let secondStatus = new Status();
    secondStatus.name = "In Progress";

    let thirdStatus = new Status();
    thirdStatus.name = "Done";


    newBoard.name = "DIN kanban board";
    statuses = [firstStatus, secondStatus, thirdStatus];
    newBoard.statuses = statuses;

    this.bService.addNewBoard(newBoard);
  }
}
