// game.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameWinner: 'X' | 'O' | null = null;

  getWinner(): 'X' | 'O' | null {
    return this.gameWinner;
  }

  setWinner(winner: 'X' | 'O' | null): void {
    this.gameWinner = winner;
  }
}
