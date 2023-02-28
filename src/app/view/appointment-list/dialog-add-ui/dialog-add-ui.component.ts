import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../appointment-list.component';

@Component({
  selector: 'app-dialog-add-ui',
  templateUrl: './dialog-add-ui.component.html',
  styleUrls: ['./dialog-add-ui.component.css']
})
export class DialogAddUiComponent {

  appointment!: string

  constructor(
    public dialogRef: MatDialogRef<DialogAddUiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
