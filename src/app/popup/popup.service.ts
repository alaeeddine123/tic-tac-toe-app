import { Injectable } from '@angular/core';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog: MatDialog) { }

  openPopup(title: string, message: string): MatDialogRef<PopupDialogComponent> {
    return this.dialog.open(PopupDialogComponent, {
      width: '600px',
      data: { title, message },
    });
  }

  
}
