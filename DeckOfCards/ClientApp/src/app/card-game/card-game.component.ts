import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { FetchDataComponent } from '../fetch-data/fetch-data.component';
// import { DeckOfCards } from '../fetch-data/fetch-data.component';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {

  constructor(http: HttpClient) {
  }

  ngOnInit(): void {
    
  }

  

}
