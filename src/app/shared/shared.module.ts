import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankingInfoDialog } from './dialog/banking-info.dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
  ],
  declarations: [BankingInfoDialog],
  exports: [BankingInfoDialog, DialogModule, ButtonModule],
  providers: [],
})
export class SharedModule {}
