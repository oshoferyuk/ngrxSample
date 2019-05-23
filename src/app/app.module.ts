import { StoreModule, MetaReducer } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { storeFreeze } from "ngrx-store-freeze";
import { EffectsModule } from "@ngrx/effects";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { bookReducer } from "./store/reducers/book.reducer";
import { environment } from "../environments/environment";
import { effects } from "./store";
import { SwapiService } from "./services/swapi.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { routerReducer, StoreRouterConnectingModule } from "@ngrx/router-store";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        bookState: bookReducer,
        router: routerReducer
      },
      { metaReducers }
    ),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AppRoutingModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
