import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureRoutes } from './feature.router';

@NgModule({
  imports: [RouterModule.forRoot(featureRoutes), CommonModule],
  declarations: [],
  exports: [],
})
export class FeaturesModule {}
