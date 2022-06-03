import { Component, Input, OnInit } from '@angular/core';
import { Board, Issue } from '@store';
import { MatDialog } from "@angular/material/dialog"
import { CreateIssueDialogComponent } from '../create-issue-dialog/create-issue-dialog.component';
import { CdkDragDrop,moveItemInArray } from '@angular/cdk/drag-drop';
import { BoardModel } from 'src/models/boardModel';
import { BoardIssueService } from './services/board-issue.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: BoardModel = new BoardModel();
  constructor(public dialog: MatDialog, private boardIssueService:BoardIssueService) { }

  ngOnInit(): void {
  }

  createIssueOnBoard() {
    let createDialog = this.dialog.open(CreateIssueDialogComponent, {
      hasBackdrop: true,
      data: this.board
    });
  }

  drop(event:CdkDragDrop<Issue[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      this.boardIssueService.updateIssuePosition(event.previousContainer.data[event.previousIndex],Number(event.container.id))
    }
  }

}
