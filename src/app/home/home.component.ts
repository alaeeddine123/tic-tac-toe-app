import { Component } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { MatDialog , MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  gameWinner: any;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private popupService : PopupService){}

   
    openPopup(gameWinner: string): void {
      const dialogRef: MatDialogRef<any> = this.popupService.openPopup(`The winner is player: ${gameWinner}`, gameWinner);
  
      const duration = 3000;  
      this.dialog.open(MatDialog);
  
       setTimeout(() => {
        dialogRef.close();
      }, duration);
    }


  closePopup() {
    this.dialog.closeAll();
   }

   onWinnerFound(winner: string): void {
    this.gameWinner = winner;
    this.openPopup(this.gameWinner);
   }
   

}
