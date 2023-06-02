import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { getPost } from '../state/posts.selector';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts!: Observable<Post[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.posts = this.store.select(getPost);
    // console.log(this.posts);
  }
}
