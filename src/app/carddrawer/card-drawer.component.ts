import { Component, OnInit, OnDestroy } from '@angular/core';

import { DeckOfCardsService } from '../services/deck-of-cards.service';

import { Subscription, BehaviorSubject } from 'rxjs';

import { NewDeck, ShuffleDeck } from '../models/deck.model';

import { Card } from '../models/card.model';

import { Draw } from '../models/draw.model';



@Component({

  selector: 'app-carddrawer',

  templateUrl: './carddrawer.component.html',

  styleUrls: ['./carddrawer.component.css']

})

export class CardDrawerComponent implements OnInit, OnDestroy {



  private deckSubscription: Subscription;

  private drawSubscriptions: Subscription[];

  private deckId: string;

  private cards: Card[];

  public  remainingCards = 0;

  public  cardsObservable: BehaviorSubject<Card[]>;



  constructor(private deckOfCardsService: DeckOfCardsService) { }



  ngOnInit() {

    this.deckSubscription = this.deckOfCardsService.createNewShuffledDeck().subscribe(

      (deck: NewDeck) => {

        this.deckId = deck.deck_id;

        this.remainingCards = deck.remaining;

      }

    );

    this.drawSubscriptions = [];

    this.cards = [];

    this.cardsObservable = new BehaviorSubject(this.cards);

  }



  ngOnDestroy() {

    this.deckSubscription.unsubscribe();

    this.drawSubscriptions.forEach(subscription => {

      subscription.unsubscribe();

    })

  }



  onDrawCard() {

    this.drawSubscriptions.push(this.deckOfCardsService.drawCards(this.deckId, 1)

      .subscribe(

        (draw: Draw) => {

          this.cards = this.cards.concat(...draw.cards);

          this.cardsObservable.next(this.cards);

          this.remainingCards = draw.remaining;

        }

      )

    );

  }



  onShuffleDeck() {

    this.deckOfCardsService.shuffleDeck(this.deckId)

      .subscribe((result: ShuffleDeck) => {

        this.cards = [];

        this.cardsObservable.next(this.cards);

        this.remainingCards = result.remaining;

      }

    );

  }



  onCardClick(cardEvent) {

    console.log(cardEvent);

  }



}
