import { Component } from '@angular/core';
import { PopupService } from '../popup/popup.service';
import { MatDialog , MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../auth.service';


/* TODO : setup auth guard  fot home page and other pages check if user is logged in */


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
    private authService: AuthenticationService,
    private popupService : PopupService){}

   
    openPopup(gameWinner: string, closeButton: boolean = false): void {
      const dialogRef: MatDialogRef<any> = this.popupService.openPopup(`The winner is player: ${gameWinner}`, gameWinner);
  
      const duration = 3000;  
      this.dialog.open(MatDialog);
  
      if (!closeButton){
        setTimeout(() => {
          dialogRef.close();
        }, duration);
      }
    }

    logout(): void {
      this.authService.logout();
    }


  closePopup() {
    this.dialog.closeAll();
   }

   onWinnerFound(winner: string): void {
    this.gameWinner = winner;
    this.openPopup(this.gameWinner);
   }
   

}
