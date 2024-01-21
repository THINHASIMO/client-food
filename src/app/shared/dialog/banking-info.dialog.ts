import { Component, Inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'banking-dialog',
  templateUrl: './banking-info.dialog.html',
})
export class BankingInfoDialog {
  dialogVisible = false;
  data: string | undefined;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  onOk(): void {
    // Handle OK action, close the dialog and pass any necessary data
    this.ref.close({ result: 'ok', data: this.data });
  }

  onCancel(): void {
    // Handle Cancel action, close the dialog
    this.ref.close({ result: 'cancel' });
  }
}
