import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SaasLayoutComponent } from './layout/saas/saas-layout.component';
import { ReviewComponent } from './page/review/review.component';
import { IdentificationComponent } from './page/review/identification/identification.component';
import { SearchComponent } from './page/review/search/search.component';
import { ResultComponent } from './page/review/result/result.component';

export const routes: Routes = [
  {
    path: '',
    component: SaasLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'review',
    component: SaasLayoutComponent,
    children: [
      { path: '', component: ReviewComponent },
      { path: ':id', component: ReviewComponent },
      { path: 'identification/:id', component: IdentificationComponent },
      { path: 'search/:id', component: SearchComponent },
      { path: 'result/:id', component: ResultComponent },
    ],
  },
];
