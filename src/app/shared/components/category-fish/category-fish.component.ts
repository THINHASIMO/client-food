import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DataInfoDialog } from '../../dialog/data-info.dialog';

@Component({
  selector: 'app-category-fish',
  templateUrl: '/category-fish.component.html',
  styleUrls: ['./category-fish.component.scss'],
})
export class CategoryFishComponent implements OnInit {
  @Input() listProduct: any;
  constructor(private dialogService: DialogService) {}
  ngOnInit() {}
  openDialog(product: any): void {
    const ref = this.dialogService.open(DataInfoDialog, {
      header: 'Thông tin sản phẩm',
      width: '75vw',
      height: '90vh',
      data: product, // Pass your data to the dialog
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
