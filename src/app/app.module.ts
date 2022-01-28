import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@store';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CreateIssueDialogComponent } from './create-issue-dialog/create-issue-dialog.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CreateIssueDialogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
