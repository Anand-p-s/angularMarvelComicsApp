import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { loaderInterceptor } from './interceptor/loader.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComicsDetailsComponent } from './routes/comics-details/comics-details.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicDetailCardComponent } from './components/comic-detail-card/comic-detail-card.component';
import { CharactersComponent } from './routes/characters/characters.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

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
    LoaderSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DividerModule,
    HttpClientModule,
    CardModule,
    ProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: loaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
