import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WeatherModule} from '../../../weather/src/lib/weather.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
