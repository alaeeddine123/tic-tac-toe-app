import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  gameWinner: 'X' | 'O' | null = null;
}
