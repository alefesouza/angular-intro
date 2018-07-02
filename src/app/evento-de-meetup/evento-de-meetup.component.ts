import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evento-de-meetup',
  templateUrl: './evento-de-meetup.component.html',
  styleUrls: ['./evento-de-meetup.component.css']
})
// It's declared to Portuguese to avoid confusion with a lot of meetupEvent
export class EventoDeMeetupComponent implements OnInit {
  @Input() evento: MeetupEvent;
  showDescription = false;

  constructor() { }

  ngOnInit() {
  }

}
