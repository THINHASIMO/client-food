import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataInfoDialog } from './dialog/data-info.dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CategoryFishComponent } from './components/category-fish/category-fish.component';
import { CategoryMeatComponent } from './components/category-meat/category-meat.component';
import { HomeSlider } from './sliders/home/home.slider';
import { CarouselModule } from 'primeng/carousel';
import { OutServiceComponent } from './components/our-service/our-service.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { PhoneCallStickComponent } from './components/phone-call-stick/phone-call-stick.component';
import { PostContentComponent } from './components/post-content/post-content.component';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { CommentComponent } from './components/comment/comment.component';
import { ProductSlider } from './sliders/product-detail/product.slider';
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
    RatingModule,
    TableModule,
  ],
  declarations: [
    HomeSlider,
    ProductSlider,

    DataInfoDialog,
    CategoryFishComponent,
    CategoryMeatComponent,
    OutServiceComponent,
    PhoneCallStickComponent,
    PostContentComponent,
    CommentComponent,
  ],
  exports: [
    HomeSlider,
    ProductSlider,

    DataInfoDialog,
    DialogModule,
    ButtonModule,
    ScrollTopModule,
    CategoryFishComponent,
    CategoryMeatComponent,
    OutServiceComponent,
    PhoneCallStickComponent,
    PostContentComponent,
    CommentComponent,
  ],
  providers: [],
})
export class SharedModule {}
