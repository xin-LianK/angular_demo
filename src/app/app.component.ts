import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CapitalizePipe],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  panelColor = new FormControl('Router');
  data: string;
  constructor(private capitalize: CapitalizePipe) { }

  onsubmit(value) {
    this.data = this.capitalize.transform(value);
  }
}
