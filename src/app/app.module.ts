import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsDetailsComponent } from './routes/comics-details/comics-details.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicDetailCardComponent } from './components/comic-detail-card/comic-detail-card.component';
import { CharactersComponent } from './routes/characters/characters.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ComicsDetailsComponent,
    ComicCardComponent,
    ComicDetailCardComponent,
    CharactersComponent,
    CharacterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DividerModule,
    HttpClientModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
