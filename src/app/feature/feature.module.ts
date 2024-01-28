import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './feature.router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './feature.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    RouterModule.forRoot(featureRoutes, { useHash: true }),
    CommonModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
  providers: [DialogService],
})
export class FeaturesModule {}
