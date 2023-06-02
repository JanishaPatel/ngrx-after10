import { Post } from './../../models/posts.model';

export interface PostState {
  posts: Post[];
}

export const initialState: PostState = {
  posts: [
    { id: '1', title: 'Sample title 1', description: 'Description 1' },
    { id: '2', title: 'Sample title 2', description: 'Description 2' },
  ],
};
