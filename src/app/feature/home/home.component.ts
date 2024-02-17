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
}
