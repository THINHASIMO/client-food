import { Routes } from '@angular/router';
import { FeaturesComponent } from './feature.component';

export const featureRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'prefix',
  },
  {
    path: 'about',
    redirectTo: 'about',
    pathMatch: 'prefix',
  },
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'features/no-content',
  },
];
