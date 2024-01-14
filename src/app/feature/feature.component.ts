import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: '/feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeaturesComponent implements OnInit {
  screenWidth = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.getScreenWidth();
  }

  private getScreenWidth() {
    this.screenWidth = window.innerWidth;
  }
}
