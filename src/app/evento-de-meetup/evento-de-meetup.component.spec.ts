import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDeMeetupComponent } from './evento-de-meetup.component';

describe('EventoDeMeetupComponent', () => {
  let component: EventoDeMeetupComponent;
  let fixture: ComponentFixture<EventoDeMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDeMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDeMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
