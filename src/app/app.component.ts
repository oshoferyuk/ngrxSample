import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { BookState, getProductState } from "./store/reducers/book.reducer";
import { LoadBook } from "./store/actions/book.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  loading = false;
  

  constructor(public store: Store<BookState>) {
    store.select(getProductState).subscribe(this.populateData.bind(this));
    //store.subscribe(console.log.bind(console));
  }

  populateData(data) {
    console.log(data.loading);
    this.loading = data.loading;    
  }

  test() {
    this.store.dispatch(
      new LoadBook({ id: 11, name: "bob", author: "borisov2" })
    );
  }
}
