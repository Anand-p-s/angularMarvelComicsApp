import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  limit: number = 10;
  characters: any;
  constructor(private db: DbService){}

  ngOnInit(): void {
      this.db.getCharacters(this.limit).subscribe((result) => {
        this.characters = result.data.results;
        console.log(this.characters);
        
      })
  }
}
