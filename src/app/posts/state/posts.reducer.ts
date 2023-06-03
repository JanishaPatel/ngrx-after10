import { createReducer, createSelector, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { addPost, deletePost, editPost } from './posts.action';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return { ...state, posts: [...state.posts, post] };
  }),
  on(editPost, (state: any, action: any) => {
    let editPost = state.posts.map((post: any) => {
      return action.post.id === post.id ? action.post : post;
    });
    return { ...state, posts: editPost };
  }),
  on(deletePost, (state: any, { id }) => {
    const updatedPost = state.posts.filter((post: any) => {
      return post.id !== id;
    });
    return { ...state, posts: updatedPost };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
