import { Component } from '@angular/core';
import { GameService } from '../popup/game.service';
import { GridService } from './grid.service';
import { Output, EventEmitter } from '@angular/core';


interface Cell {
  value: 'X' | 'O' | null;
}



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  providers: [GridService],
})



export class GridComponent {

  @Output()  winnerFound = new EventEmitter<any>();

 
  constructor(private gridService: GridService) {}

  cells: Cell[] = Array.from({ length: 9 }, () => ({ value: null }));
  currentPlayer: 'X' | 'O' = 'X';
  gameWinner: 'X' | 'O' | null = null;

  onCellClick(cell: Cell): void {
    if (!cell.value && !this.gameWinner) {
      cell.value = this.currentPlayer;
      this.checkWinner();
      this.switchPlayer();
    }
  }
  private checkWinner(): void {
    const winningCombinations: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        this.cells[a].value &&
        this.cells[a].value === this.cells[b].value &&
        this.cells[a].value === this.cells[c].value
      ) {
         this.gameWinner = this.cells[a].value;
         this.winnerFound.emit(this.gameWinner);
        console.log(" game winner ",this.gameWinner);
        break;
      }
    }
    
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }


}
