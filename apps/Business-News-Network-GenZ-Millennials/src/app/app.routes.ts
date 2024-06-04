import { Route } from '@angular/router';
import { NewsPageComponent } from './presentation/news-page/feed-page.component';
import { FeedPageComponent } from './presentation/feed-page/feed-page.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsPageComponent },
  { path: 'feed', component: FeedPageComponent },
];
