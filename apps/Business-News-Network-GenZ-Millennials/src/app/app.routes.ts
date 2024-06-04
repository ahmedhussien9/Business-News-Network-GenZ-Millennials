import { Route } from '@angular/router';
import { ContentConsumptionComponent } from './presentation/home/content-consumption/content-consumption.component';
import { VirtualScrollComponent } from './presentation/virtual-scroll/virtual-scroll.component';

export const appRoutes: Route[] = [
  { path: 'content-consumption', component: ContentConsumptionComponent },
  { path: 'posts', component: VirtualScrollComponent },
];
