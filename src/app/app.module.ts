import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { KanyeService } from './services/kanye.service';


import { CardDrawerComponent } from './carddrawer/card-drawer.component';

import { DeckOfCardsService } from './services/deck-of-cards.service';

import { CardComponent } from './carddrawer/card/card.component';



@NgModule({

  declarations: [

    AppComponent,

    HeaderComponent,

    HomeComponent,

    AboutComponent,


    CardDrawerComponent,

    CardComponent

  ],

  imports: [

    BrowserModule,

    BrowserAnimationsModule,

    AppRoutingModule,

    HttpClientModule,

  

  ],

  providers: [


    KanyeService,

    DeckOfCardsService

  ],

  bootstrap: [AppComponent]

})

export class AppModule { }