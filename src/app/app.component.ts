import { Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialog} from '@angular/material';

export class PizzaPartyAppModule { }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fisrtProject';

  constructor(public dialog: MatDialog) {

  }
  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });
    console.assert("aaa");
  }

}
