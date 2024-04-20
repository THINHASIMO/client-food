import { Component } from '@angular/core';
import { sliders } from '../../data/slider.data';

@Component({
  selector: 'slider-product',
  templateUrl: './product.slider.html',
})
export class ProductSlider {
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
