import { Board } from './../../../projects/store/src/lib/models/board';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Issue, IssueService } from '@store';
import { BoardModel } from 'src/models/boardModel';

@Component({
  selector: 'app-create-issue-dialog',
  templateUrl: './create-issue-dialog.component.html',
  styleUrls: ['./create-issue-dialog.component.css']
})
export class CreateIssueDialogComponent implements OnInit {
  createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateIssueDialogComponent>,
    public createIssueService: IssueService,
    public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private data: BoardModel) {
    this.createForm = this.fb.group({
      summary: "",
      description: ""
    });
  }

  ngOnInit(): void {
  }

  createIssue() {
    let createValue = this.createForm.value;
    let newIssue = new Issue(createValue.summary, createValue.description, this.data.id, this.data.stages[0].id);
    this.createIssueService.addIssue(newIssue);
    console.log(this.data, newIssue);
  }

}
