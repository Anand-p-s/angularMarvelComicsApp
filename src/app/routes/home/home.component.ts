import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  comics: any = [];

  constructor(private db: DbService) {}

  ngOnInit(): void {
    this.getComicsThisWeek();
  }

  getComicsThisWeek() {
    this.db.getComicsThisWeek().subscribe((result) => {
      console.log(result.data.results);
      this.comics = result.data.results;
    });
  }
}
