import { Card } from './card.model';

export class Draw {
  public success:   boolean;
  public cards:     Card[];
  public deck_id:   string;
  public remaining: number;
}