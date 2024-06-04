import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../../domain/models/posts';
@Injectable({
  providedIn: 'root',
})
export class PostRepositoryImpl {
  private postsUrl = 'social_media_posts_with_updated_videos.json';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
