import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { NewDeck, ShuffleDeck } from '../models/deck.model';

import { Observable } from 'rxjs';

import { Draw } from '../models/draw.model';



@Injectable()

export class DeckOfCardsService {



	private deckBaseUrl = 'https://deckofcardsapi.com/api/deck';



	constructor(private http: HttpClient) { }



	/**

	 * Create a new deck

	 * @param deckCount number of decks included i.e 6 for black jack

	 */

	public createNewShuffledDeck(deckCount?: number): Observable<NewDeck> {

		deckCount = !!deckCount ? deckCount : 1;

		return this.http.get<NewDeck>(`${this.deckBaseUrl}/new/shuffle/?deck_count=${deckCount}`)

	}



	/**

	 * Shuffle all cards back into an existing deck

	 * @param deckID string identifier of the deck to shuffle

	 */

	public shuffleDeck(deckID: string): Observable<ShuffleDeck> {

		return this.http.get<ShuffleDeck>(`${this.deckBaseUrl}/${deckID}/shuffle/`);

	}



	/**

	 * Draw n number of cards from the deck

	 * @param deckID string identifier of the deck

	 * @param cardCount number of cards to draw

	 */

	public drawCards(deckID: string, cardCount?: number): Observable<Draw> {

		cardCount = !!cardCount ? cardCount : 1;

		return this.http.get<Draw>(`${this.deckBaseUrl}/${deckID}/draw/?count=${cardCount}`);

	}





}