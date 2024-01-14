import { Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
export const featureRoutes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule,
  },
  {
    path: 'about',
    loadChildren: () => AboutModule,
  },
];
