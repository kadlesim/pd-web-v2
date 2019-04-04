import { Component, OnInit } from '@angular/core';

export interface BasicPlayer {
  name: any;
  image: any;
  number: number;
  category: any[];
}

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
