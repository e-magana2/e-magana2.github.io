import { Component, OnInit } from '@angular/core';
import { KanyeService } from '../services/kanye.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public quote: Observable<string>;

  constructor(public kanyeService: KanyeService) { }

  ngOnInit() {
    this.quote = this.kanyeService.getQuote();
  }

}
