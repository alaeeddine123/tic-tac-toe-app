import { Injectable } from '@angular/core';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openPopup(title: string, message: string,closeButton: boolean = false): MatDialogRef<PopupDialogComponent> {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = !closeButton;
    dialogConfig.data = { message, title };

    const dialogRef: MatDialogRef<any> = this.dialog.open(PopupDialogComponent, dialogConfig);
    return dialogRef;
  }

  
}
