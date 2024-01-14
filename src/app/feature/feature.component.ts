import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: '/feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('[FeaturesComponent:ngOnInit]');
  }
}
