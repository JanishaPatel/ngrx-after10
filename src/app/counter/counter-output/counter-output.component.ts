import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCompanyName, getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
// , OnDestroy
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  // counterSubscription!: Subscription;
  // counter$!: Observable<{ counter: number }>;
  counter$!: Observable<number>;

  // constructor(private store: Store<{ counter: { counter: number } }>) {}
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    //By Subscription
    // this.counterSubscription = this.store
    //   .select('counter')
    //   .subscribe((data) => {
    //     this.counter = data.counter;
    //   });
    //By observable
    // this.counter$ = this.store.select('counter');
    this.counter$ = this.store.select(getCounter);

    // this.store.select(getCounter).subscribe((counter) => {
    //   console.log('counter observable called');
    //   this.counter = counter;
    // });
  }
  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
