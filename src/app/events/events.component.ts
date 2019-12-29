import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor( private titleService: Title ) { }

  ngOnInit() {
    this.titleService.setTitle('Angular - EVENTS');
  }

}
