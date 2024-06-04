import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../../domain/models/posts';
import { PostRepositoryImpl } from '../../infrastructure/repositories/post-repository.impl';

@Injectable({
  providedIn: 'root',
})
export class PostDataUseCase {
  private posts: Post[] = [];

  constructor(private postRepository: PostRepositoryImpl) {}

  getPosts(page: number, size: number): Observable<Post[]> {
    return this.postRepository.getPosts().pipe(
      map((posts) => {
        this.posts = posts;
        const start = page * size;
        const end = start + size;
        return posts.slice(start, end);
      })
    );
  }
}
