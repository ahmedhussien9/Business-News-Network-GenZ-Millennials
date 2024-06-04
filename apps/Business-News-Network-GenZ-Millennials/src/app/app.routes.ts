import { Route } from '@angular/router';
import { VirtualScrollComponent } from './presentation/virtual-scroll/virtual-scroll.component';
import { ContentConsumptionComponent } from './presentation/content-consumption/content-consumption.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: ContentConsumptionComponent },
  { path: 'feed', component: VirtualScrollComponent },
];
