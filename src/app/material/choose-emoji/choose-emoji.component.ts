import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-choose-emoji',
  templateUrl: './choose-emoji.component.html',
  styleUrls: ['./choose-emoji.component.css']
})
export class ChooseEmojiComponent implements OnInit {
  emojis = ['🐼', '💪', '🐷', '🤖', '👽', '🐥'];
  choosenEmoji: string;
  constructor(public dialogRef: MatDialogRef<ChooseEmojiComponent>) { }
  ngOnInit() {
  }
  confirmSelection() {
    this.dialogRef.close(this.choosenEmoji);
  }
}
