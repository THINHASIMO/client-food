import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: '/post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  @Input() listPost: any;
  ngOnInit(): void {}
}
