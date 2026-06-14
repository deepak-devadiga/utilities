import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'games/coin-flip',
    pathMatch: 'full',
  },
  {
    path: 'calculators',
    redirectTo: 'gcalculators/basic',
    pathMatch: 'full',
  },
  {
    path: 'games/coin-flip',
    loadComponent: () => import('./coin-toss/coin-toss').then((m) => m.CoinToss),
  },
  {
    path: 'calculators/basic',
    loadComponent: () =>
      import('./calculators/basic-calculator/basic-calculator').then((m) => m.BasicCalculator),
  },
];
