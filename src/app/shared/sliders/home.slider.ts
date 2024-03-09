import { Component } from '@angular/core';
import { sliders } from '../data/slider.data';

@Component({
  selector: 'slider-banner',
  templateUrl: './home.slider.html',
})
export class HomeSlider {
  sliderList: any[] = [];

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    this.sliderList = sliders;

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return '';
  }
}
