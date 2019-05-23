import { ActionReducerMap } from "@ngrx/store";
import * as fromBook from "./book.reducer";
import { routerReducer } from "@ngrx/router-store";
//1 state
export interface State {
  book: fromBook.BookState;  
  //people: fromPeople.PeopleState
}

export const reducers: ActionReducerMap<State> = {
  book: fromBook.bookReducer  
};
//2 export selectors
