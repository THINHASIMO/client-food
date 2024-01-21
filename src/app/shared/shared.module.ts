import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankingInfoDialog } from './dialog/banking-info.dialog';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, DialogModule],
  declarations: [BankingInfoDialog],
  exports: [BankingInfoDialog, DialogModule],
  providers: [],
})
export class SharedModule {}
