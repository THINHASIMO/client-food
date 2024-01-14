import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './feature.router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FeaturesComponent } from './feature.component';

@NgModule({
  imports: [
    RouterModule.forRoot(featureRoutes, { useHash: true }),
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent, RouterModule],
})
export class FeaturesModule {}
