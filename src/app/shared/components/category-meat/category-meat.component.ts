import { Component, Input, OnInit } from '@angular/core';
import { BankingInfoDialog } from '../../dialog/banking-info.dialog';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-category-meat',
  templateUrl: '/category-meat.component.html',
  styleUrls: ['./category-meat.component.scss'],
})
export class CategoryMeatComponent implements OnInit {
  @Input() listProduct: any;
  constructor(private dialogService: DialogService) {}
  ngOnInit() {}
  openDialog(): void {
    const ref = this.dialogService.open(BankingInfoDialog, {
      header: 'Thông tin sản phẩm',
      width: '75vw',
      height: '75vh',
      data: 'hello world', // Pass your data to the dialog
    });

    ref.onClose.subscribe((dialogResult: any) => {
      // Handle dialog result here
      if (dialogResult.result === 'ok') {
        console.log('OK button clicked');
        console.log('Data received:', dialogResult.data);
      } else if (dialogResult.result === 'cancel') {
        console.log('Cancel button clicked');
      }
    });
  }
}
