import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { SwapiService } from "../../services/swapi.service";
import { LOAD_BOOK, LoadBookSuccess } from "../actions/book.action";
import { map, switchMap, catchError, tap } from "rxjs/operators";

@Injectable()
export class BookEffects {
  constructor(private actions$: Actions, private swapiService: SwapiService) {}

  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(LOAD_BOOK),
    switchMap(() => {
      return this.swapiService.getPeople().pipe(
        tap(() => {
          console.log("**** ");
        }),
        map(
          data =>
            new LoadBookSuccess({
              id: 16,
              name: "zzz",
              author: "zurom"
            })
        )
      );
    })
  );
}
