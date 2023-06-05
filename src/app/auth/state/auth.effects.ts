import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions, private authService: AuthService) {
    console.log('here again');
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            console.log(data);
            return loginSuccess();
          })
        );
      })
    );
  });
}
