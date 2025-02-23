import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SaasLayoutComponent } from './layout/saas/saas-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: SaasLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
