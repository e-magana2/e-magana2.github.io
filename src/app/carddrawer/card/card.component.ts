import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from 'src/app/models/card.model';





@Component({

  selector: 'app-card',

  templateUrl: './card.component.html',

  styleUrls: ['./card.component.css']

})

export class CardComponent implements OnInit {



  @Input() card: Card;

  @Output() click: EventEmitter<Card>;



  constructor() { 

    this.click = new EventEmitter<Card>();

  }



  ngOnInit() {

  }



  onCardClick() {

    this.click.emit(this.card);

  }



}