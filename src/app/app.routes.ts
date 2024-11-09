import { Routes } from '@angular/router';
import { AppConstants } from './constants/app.constants';

export const routes: Routes = [
    { path: '', redirectTo: AppConstants.ROUTES.HOME, pathMatch: 'full' },
    { path: AppConstants.ROUTES.HOME, loadComponent: () => import('./home/home.component').then(c => c.HomeComponent), canActivate: [] },
];
