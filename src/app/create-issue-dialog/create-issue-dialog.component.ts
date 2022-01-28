import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-issue-dialog',
  templateUrl: './create-issue-dialog.component.html',
  styleUrls: ['./create-issue-dialog.component.css']
})
export class CreateIssueDialogComponent implements OnInit {
  createForm: FormGroup;

  constructor( public dialogRef: MatDialogRef<CreateIssueDialogComponent>,public fb:FormBuilder) { 
    this.createForm=this.fb.group({
      summary:"",
      description:""
    });
  }

  ngOnInit(): void {
  }

  createIssue(){
    console.log(this.createForm.value);
  }

}
