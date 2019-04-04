import { Component, OnInit } from '@angular/core';

export interface BasicPlayer {
  name: any;
  nickname: any;
  image: any;
  number: number;
  category: any[];
  description: any;
  photo: any;
  fieldPosition: any;
}

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
