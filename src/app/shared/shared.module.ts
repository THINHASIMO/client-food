import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataInfoDialog } from './dialog/data-info.dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CategoryFishComponent } from './components/category-fish/category-fish.component';
import { CategoryMeatComponent } from './components/category-meat/category-meat.component';
import { HomeSlider } from './sliders/home.slider';
import { CarouselModule } from 'primeng/carousel';
import { OutServiceComponent } from './components/our-service/our-service.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PhoneCallStickComponent } from './components/phone-call-stick/phone-call-stick.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    CarouselModule,
    ScrollTopModule,
  ],
  declarations: [
    HomeSlider,
    DataInfoDialog,
    CategoryFishComponent,
    CategoryMeatComponent,
    OutServiceComponent,
    PhoneCallStickComponent,
  ],
  exports: [
    HomeSlider,
    DataInfoDialog,
    DialogModule,
    ButtonModule,
    ScrollTopModule,
    CategoryFishComponent,
    CategoryMeatComponent,
    OutServiceComponent,
    PhoneCallStickComponent,
  ],
  providers: [],
})
export class SharedModule {}
