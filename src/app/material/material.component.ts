import { Component, OnInit } from '@angular/core';
import { ChooseEmojiComponent } from './choose-emoji/choose-emoji.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  selectedEmoji: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openEmojiDialog() {
    let dialog = this.dialog.open(ChooseEmojiComponent);

    dialog.afterClosed()
      .subscribe(selection => {
        if (selection) {
          this.selectedEmoji = selection;
        } else {
          // User clicked 'Cancel' or clicked outside the dialog
        }
      });
  }
}
