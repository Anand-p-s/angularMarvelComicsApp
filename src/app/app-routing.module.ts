import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ComicsDetailsComponent } from './routes/comics-details/comics-details.component';
import { CharactersComponent } from './routes/characters/characters.component';
import { CharacterDetailsComponent } from './routes/character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'comic-details/:comicId',
    component: ComicsDetailsComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'character-details/:characterId',
    component: CharacterDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
