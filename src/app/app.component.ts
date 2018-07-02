import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { MeetupApiService } from './meetup-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter = 0;
  meetupEvents: MeetupEvent[] = [];

  constructor(public meetupApiService: MeetupApiService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);

    this.loadData();
  }

  async loadData() {
    const events = await this.meetupApiService.getEvents();
    this.meetupEvents.push(...events);
  }

  onClickEvent(clickedEvent: MeetupEvent) {
    alert(clickedEvent.name);
  }

}
