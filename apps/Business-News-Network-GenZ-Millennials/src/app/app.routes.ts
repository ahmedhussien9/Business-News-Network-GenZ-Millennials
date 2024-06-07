import { Route } from '@angular/router';
import { FeedPageComponent } from './presentation/feed-page/feed-page.component';
import { NewsPageComponent } from './presentation/news-page/news-page.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component: NewsPageComponent },
  { path: 'feed', component: FeedPageComponent },
];
