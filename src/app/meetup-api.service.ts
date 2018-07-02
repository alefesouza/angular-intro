import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetupApiService {
  url = 'https://api.meetup.com/CaquiCoders/events?status=past';

  constructor(private httpClient: HttpClient) { }

  getEvents(): Promise<MeetupEvent[]> {
    return this.httpClient.get<MeetupEvent[]>(this.url).toPromise();
  }
}
