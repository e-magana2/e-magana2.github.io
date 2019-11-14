import { CardSuit } from './card-suit.enum';
import { CardValue } from './card-value.enum';

export class Card {
  public image: string;
  public value: CardValue;
  public suit:  CardSuit;
  public code:  string;
}