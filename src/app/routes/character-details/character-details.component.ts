import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css',
})
export class CharacterDetailsComponent implements OnInit {
  characterId!: number;
  limit: number = 5;
  comics: any;
  characterDetails: any;

  constructor(private route: ActivatedRoute, private db: DbService) {}

  ngOnInit(): void {
    this.characterId = this.route.snapshot.params['characterId'];
    this.getComicsByCharacterId();
    this.getCharacterById();
  }

  getComicsByCharacterId() {
    this.db
      .getComicsByCharacterId(this.characterId, this.limit)
      .subscribe((result) => {
        this.comics = result.data.results;
        console.log(this.comics);
      });
  }

  getCharacterById() {
    this.db.getCharacterById(this.characterId).subscribe((result) => {
      this.characterDetails = result.data.results[0];
      console.log(this.characterDetails);
    });
  }

  loadMore() {
    this.limit +=10;
    this.getComicsByCharacterId();
  }
}
