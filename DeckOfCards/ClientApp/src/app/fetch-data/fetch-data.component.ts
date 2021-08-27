import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: '../card-game/card-game.component.html',
  styleUrls: ['../card-game/card-game.component.css']
})
export class FetchDataComponent {
  public CardDeck: DeckOfCards[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<DeckOfCards[]>(baseUrl + 'DeckOfCards').subscribe(data => {
      this.CardDeck = data;
    }, error => console.error(error));
  }
}

export class DeckOfCards {
  
}



