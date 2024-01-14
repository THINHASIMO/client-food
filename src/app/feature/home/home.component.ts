import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/shared/data/product.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listProduct = products;
  constructor() {}
  ngOnInit() {
    console.log('listProduct', this.listProduct);
  }
}
