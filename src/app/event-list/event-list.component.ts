import { Component, OnInit } from '@angular/core';
import {EventListService} from './event-list.service';
import {Event} from '../event/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: any;
  data: any;

  constructor(private eventService: EventListService) { }

  ngOnInit() {
    if (this.events == undefined){
      this.eventService.getEvents()
        .subscribe(data => this.events = {
          data: data['data']
        }.data);
      console.log('showEvents');
    }
  }

  goToUrl(url: any): void {
    // document.location.href = url;
    window.open(url);
  }


  showEvents() {
    if (this.events != undefined) {
      return true;
    } else {
      return false;
    }
  }

}
