import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  message: string;
  player: string;
  closeButton: boolean;
 }


  @Component({
    selector: 'app-popup-dialog',
    template: `
    <h2 mat-dialog-title>{{ data.message }}</h2>
    <mat-dialog-content>
      <p>{{ data.player }} wins the game!</p>
    </mat-dialog-content>
    <mat-dialog-actions *ngIf="!data.closeButton">
      <button mat-button (click)="closePopup()">Close</button>
    </mat-dialog-actions>
  `,
  })
  export class PopupDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<PopupDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  

  closePopup(): void {
    this.dialogRef.close();
    window.location.reload()

  }

  }
