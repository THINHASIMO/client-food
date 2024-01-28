import { Component, Inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'banking-dialog',
  templateUrl: './banking-info.dialog.html',
})
export class BankingInfoDialog {
  employee: any; // Declare the employee property to hold the data

  constructor(
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig
  ) {
    // Retrieve the employee data from the dialog configuration
    this.employee = dialogConfig.data.employee;
  }

  closeDialog(): void {
    // You can add any additional logic here before closing the dialog
    // For example, you might want to save changes or perform some cleanup

    // Close the dialog
    this.dialogRef.close();
  }
}
