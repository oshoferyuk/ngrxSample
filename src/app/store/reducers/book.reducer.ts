import * as fromBookAction from "../actions/book.action";
import { Book } from "../../models/book.model";
import { createFeatureSelector } from "@ngrx/store";

export interface BookState {
  books: Book[];
  loading: boolean;
  loaded: boolean;
}

export const initialState = {
  books: [],
  loading: false,
  loaded: false
};

export function bookReducer(
  state = initialState,
  action: fromBookAction.BookAction
) {
  switch (action.type) {
    case fromBookAction.LOAD_BOOK:
      const newBook: Book = action.payload;
      return {
        ...state,
        loading: true
      };

    case fromBookAction.LOAD_BOOK_SUCCESS:
      const newBookS: Book = action.payload;
      return {
        ...state,
        books: [...state.books, newBookS],
        loading: false,
        loaded: true
      };
  }

  return state;
}

export const getProductState = createFeatureSelector<BookState>("bookState");
