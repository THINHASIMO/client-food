import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { comments } from 'src/app/shared/data/comment.data';
import { posts } from 'src/app/shared/data/post.data';
import { products } from 'src/app/shared/data/product.data';
import { services } from 'src/app/shared/data/service.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listProduct = products;
  listService = services;
  listPost = posts;
  comments = comments;
  constructor(private dialogService: DialogService) {}
  ngOnInit() {
    console.log('listProduct', this.listProduct);
  }
}
