import { Action } from "@ngrx/store";

export const LOAD_BOOK = "[ROOT] Load Book";
export const LOAD_BOOK_SUCCESS = "[ROOT] Load Book Success";

export class LoadBook implements Action {
  readonly type = LOAD_BOOK;
  constructor(public payload: any) {}
}

export class LoadBookSuccess implements Action {
  readonly type = LOAD_BOOK_SUCCESS;
  constructor(public payload: any) {}
}

export type BookAction = LoadBook | LoadBookSuccess;
