import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { CounterState } from '../state/counter.state';
import { customIncrement, customText } from '../state/counter.actions';
import { getCompanyName } from '../state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  // compName: string = '';
  compName$!: Observable<string>;
  constructor(private store: Store<AppState>) {}
  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
  onChangeText() {
    this.store.dispatch(customText());
  }

  ngOnInit(): void {
    // this.store.select(getCompanyName).subscribe((companyName) => {
    //   console.log('company name observable called');

    //   this.compName = companyName;
    // });
    this.compName$ = this.store.select(getCompanyName);
  }
}
