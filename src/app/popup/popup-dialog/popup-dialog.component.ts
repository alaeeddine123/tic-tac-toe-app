import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-dialog',
  template: `
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
  `,
})
export class PopupDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
