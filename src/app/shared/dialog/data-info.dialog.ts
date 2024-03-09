import { Component, Inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'data-dialog',
  templateUrl: './data-info.dialog.html',
  styleUrls: ['./data-info.dialog.css'],
})
export class DataInfoDialog {
  product: any; // Declare the product property to hold the data

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
  ) {
    this.product = dialogConfig.data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
