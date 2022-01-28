import { Component, Input, OnInit } from '@angular/core';
import { Board } from '@store';
import { MatDialog } from "@angular/material/dialog"
import { CreateIssueDialogComponent } from '../create-issue-dialog/create-issue-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() board: Board = new Board();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createIssueOnBoard() {
    let createDialog=this.dialog.open(CreateIssueDialogComponent,{
      hasBackdrop:true
    });
  }

}
