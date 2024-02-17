import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BankingInfoDialog } from './dialog/banking-info.dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CategoryFishComponent } from './components/category-fish/category-fish.component';
import { CategoryMeatComponent } from './components/category-meat/category-meat.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DialogModule,
  ],
  declarations: [
    BankingInfoDialog,
    CategoryFishComponent,
    CategoryMeatComponent,
  ],
  exports: [
    BankingInfoDialog,
    DialogModule,
    ButtonModule,
    CategoryFishComponent,
    CategoryMeatComponent,
  ],
  providers: [],
})
export class SharedModule {}
