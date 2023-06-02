import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  // constructor(private store: Store<{ counter: { counter: number } }>) {}
  constructor(private store: Store<AppState>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
  ngOnInit(): void {}
}
