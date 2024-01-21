import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { products } from 'src/app/shared/data/product.data';
import { BankingInfoDialog } from 'src/app/shared/dialog/banking-info.dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listProduct = products;
  constructor(private dialogService: DialogService) {}
  ngOnInit() {
    console.log('listProduct', this.listProduct);
  }

  openDialog(): void {
    const ref = this.dialogService.open(BankingInfoDialog, {
      header: 'Thông tin sản phẩm',
      width: '50vw',
      height: '50vh',
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
