import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetupApiService } from './meetup-api.service';
import { HttpClientModule } from '@angular/common/http';
import { EventoDeMeetupComponent } from './evento-de-meetup/evento-de-meetup.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoDeMeetupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MeetupApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
