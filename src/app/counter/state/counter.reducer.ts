import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
  increment,
  decrement,
  reset,
  customIncrement,
  customText,
} from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: any) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state: any) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state: any) => {
    return { ...state, counter: 0 };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);

    return { ...state, counter: state.counter + action.value };
  }),
  on(customText, (state: any) => {
    return { ...state, compName: 'TCS' };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
