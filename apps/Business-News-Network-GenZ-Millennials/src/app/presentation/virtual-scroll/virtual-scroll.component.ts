import { Component, OnInit } from '@angular/core';
import { PostDataUseCase } from '../../application/use-cases/get-posts-data.use-case';
import { Post } from '../../domain/models/posts';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PostRepositoryImpl } from '../../infrastructure/repositories/post-repository.impl';
import { GzmPostCreatorComponent } from '@bbn/gzm-ui-library';

@Component({
  standalone: true,
  imports: [CommonModule, ScrollingModule, GzmPostCreatorComponent],
  providers: [PostDataUseCase, PostRepositoryImpl], // Provide services and HttpClientModule
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent implements OnInit {
  posts: Post[] = [];
  page = 0;
  size = 30;
  isLoading = false;
  recommendations = [
    {
      image: 'nbk.jpg',
      name: 'National Bank of Egypt (NBE)',
      details: 'Company • Banking',
    },
    {
      image: 'person.jpg',
      name: 'Ryan Peterman',
      details:
        'Staff Software Engineer @ Instagram | Writing About Software Engineering &...',
    },
    {
      image: 'iti.png',
      name: 'Information Technology Institute (ITI)',
      details: 'Company • Professional Training and',
    },
  ];
  constructor(private postService: PostDataUseCase) {}

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.postService.getPosts(this.page, this.size).subscribe((data) => {
      this.posts = [...this.posts, ...data];
      this.page++;
      this.isLoading = false;
    });
  }

  trackByFn(index: number, item: Post): string {
    return item.id; // or any unique identifier for the items
  }
}
